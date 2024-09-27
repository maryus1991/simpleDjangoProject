from rest_framework.test import  APIClient
from django.urls import reverse
from django.contrib.auth import get_user_model
import pytest

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
    """
    the return is about three section in tuple the first is the jwt token in header client the second is the response for getting
    jwt tokens and the third is for senf=ding anonymous requests
    """
    return (client, response.json(), APIClient())


@pytest.mark.django_db
class TestUserAccountingAPI:
    def test_post_registrations_api_response_200_status(self):
        pass
