import pytest
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APIClient

User = get_user_model()

user = {"username": "maryus", "password": "123", "email": "test@test.test"}


@pytest.fixture
def client():
    """
    create and get APIClient with jwt token in headers for auth user that tested for jwt token apis
    """
    client = APIClient()
    User.objects.create_user(
        username=user.get("username"),
        email=user.get("email"),
        password=user.get("password"),
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
    anonymous_client = APIClient()
    return client, response.json(), anonymous_client


@pytest.mark.django_db
class TestUserPassword:
    """
    i decided for spread password apis from profile and accounting api
    and here is user password api testing
    """

    def test_post_change_password_response_200_status(self, client):
        """
        this func for test changing password with login and authenticated user in his profile
        """
        url = reverse("change-password")
        data = {
            "password": "123",
            "new_password": "@123@mm@",
            "conform_new_password": "@123@mm@",
        }
        response = client[0].post(url, data=data)
        assert response.status_code == 200

    def test_post_send_email_reset_password_response_202_status(self, client):
        """
        for testing send email api for reset password for forgot password
        """
        url = reverse("resetPasswordSendEmail")
        data = {"email": user.get("email")}
        response = client[2].post(url, data=data)
        assert response.status_code == 202

    def test_get_post_reset_password_linked_response_200_status(self, client):
        """
        for testing get and post api that come from sending email for user and changing password for #
        users who forgot there password
        """
        url = reverse("ResetPassword", kwargs={"token": client[1].get("access")})
        data = {"new_password": "@123@mm@", "conform_new_password": "@123@mm@"}
        assert client[2].get(url).status_code == 202
        assert client[2].post(url, data=data).status_code == 202
