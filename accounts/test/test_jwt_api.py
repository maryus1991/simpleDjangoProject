import pytest
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.utils.crypto import get_random_string
from rest_framework.test import APIClient

User = get_user_model()

user = {
    'username': 'maryus',
    'password': '123',
}


@pytest.fixture
def client():
    """
    create and get APIClient with jwt token in headers for auth user that tested for jwt token apis
    """
    client = APIClient()
    User.objects.create_user(username=user.get('username'), password=user.get('password'))
    response = client.post('/accounts/api/v1/jwt/get-token/', {
        'username': user.get('username'),
        'password': user.get('password'),
    })
    headers = {"HTTP_AUTHORIZATION": 'Bearer ' + response.json().get('access')}
    assert response.status_code == 200
    client.credentials(**headers)
    return client, response.json()


@pytest.mark.django_db
class TestJWTAPI:
    """
    for testing jwt api
    *********************************************
    *notice get jwt token has been tested  in client fixture*
    """

    def test_post_refresh_token_response_200_status(self, client):
        """
        for testing jwt api refresh token response 200 status
        """
        data = {
            'refresh': client[1].get('refresh')
        }
        response = client[0].post(reverse('jwt_refresh'), data=data)
        assert response.status_code == 200

    def test_post_refresh_token_response_401_status(self, client):
        """
                for testing jwt api refresh token response 401 status with bad refresh token

        """

        data = {
            'refresh': get_random_string(120)
        }
        response = client[0].post(reverse('jwt_refresh'), data=data)
        assert response.status_code == 401

    def test_post_verify_token_response_200_status(self, client):
        """
                for testing jwt api that  verify access token response 200 status

        """
        data = {
            'token': client[1].get('access')
        }
        response = client[0].post(reverse('jwt_verify'), data=data)
        assert response.status_code == 200

    def test_post_verify_token_response_401_status(self, client):
        """
                for testing jwt api that  verify access token response 401 status with bad access token

        """
        data = {
            'token': get_random_string(120)
        }
        response = client[0].post(reverse('jwt_verify'), data=data)
        assert response.status_code == 401
