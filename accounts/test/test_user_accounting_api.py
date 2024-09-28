from django.urls import reverse
import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient

User = get_user_model()

user = {
    "username": "maryus",
    "password": "123",
}


@pytest.fixture
def client():
    """
    create and get APIClient with jwt token in headers for auth user that tested for jwt token apis
    """
    client = APIClient()
    User.objects.create_user(
        username=user.get("username"), password=user.get("password")
    )
    response = client.post(
        "/accounts/api/v1/jwt/get-token/",
        {
            "username": user.get("username"),
            "password": user.get("password"),
        },
    )
    headers = {"HTTP_AUTHORIZATION": "Bearer " + response.json().get("access")}
    assert response.status_code == 200
    client.credentials(**headers)
    """
    the return is about three section in tuple the first is the jwt token in header client the second is the response for getting
    jwt tokens and the third is for senf=ding anonymous requests
    """
    return (client, response.json(), APIClient())


@pytest.mark.django_db
class TestUserAccountingAPI:
    """
    for testing  user account urls such as registration ,get put patch profile api and api activation api
    """

    def test_post_registrations_api_response_200_status(self, client):
        """
        for testing post api for registration api
        """
        url = reverse("registration-api")
        data = {
            "username": "maryus123",
            "email": "user-maryus@example.com",
            "password": "123@mm@@",
            "conform_password": "123@mm@@",
        }
        response = client[2].post(url, data)
        assert response.status_code == 200

    def test_get_account_activation_api_response_200_status(self, client):
        """
        for testing get activations code that has been send from to email
        """
        url = reverse("conform-account", kwargs={"token": client[1].get("access")})
        response = client[2].get(url)
        assert response.status_code == 201

    def test_get_put_path_account_profile_api_response_200_status(self, client):
        """
        for testing profile urls and i decided for test the in one function with mult asset
        """
        url = reverse("update-profile")

        get_response = client[0].get(url)
        assert get_response.status_code == 200

        put_data = {
            "username": user.get("username"),
            "email": "user@example.com",
            "first_name": "test",
            "last_name": "test",
        }
        put_response = client[0].put(url, data=put_data)
        assert put_response.status_code == 200

        path_data = {"first_name": "mostafa", "last_name": "ebrahimy"}

        path_response = client[0].patch(url, data=path_data)
        assert path_response.status_code == 200
