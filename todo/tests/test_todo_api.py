import pytest
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APIClient

from todo.models import Todo

User = get_user_model()

user = {
    "username": "maryus",
    "password": "123",
}


@pytest.fixture
def api_auth_jwt_client():
    """
    create and get APIClient with jwt token in headers for auth user and for todo api as authenticated user
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
    headers = {}
    headers["HTTP_AUTHORIZATION"] = "Bearer " + response.json().get("access")
    assert response.status_code == 200
    client.credentials(**headers)
    return client


@pytest.fixture
def api_anonymous_client():
    """
    create and get APIClient with jwt token in headers for auth user and for todo api as anonymous user
    """
    client = APIClient()
    return client


@pytest.fixture
def get_last_object_pk():
    """
    for getting and create a todo object for testing crud apis
    """
    test_user = User.objects.filter(username=user.get("username")).first()
    todo = Todo.objects.create(user=test_user, title="tests")
    return todo.pk


@pytest.mark.django_db
class TestTodoApi:
    """
    for testing todo api in pytest lib
    """

    def test_get_response_200_status(self, api_auth_jwt_client):
        """
        for testing get todo list api with authenticated user
        """
        response = api_auth_jwt_client.get(reverse("todo-list"))
        assert response.status_code == 200

    def test_get_response_401_status(self, api_anonymous_client):
        """
        for testing get todo list api with anonymous user
        """
        response = api_anonymous_client.get(reverse("todo-list"))
        assert response.status_code == 401

    def test_post_response_201_status(self, api_auth_jwt_client):
        """
        for testing creating todo object api with authenticated user
        """
        response = api_auth_jwt_client.post(
            reverse("todo-list"),
            {
                "title": "tests",
                "status": "false",
            },
        )
        assert response.status_code == 201

    def test_post_response_401_status(self, api_anonymous_client):
        """
        for testing creating todo object api with anonymous user
        """
        response = api_anonymous_client.post(
            reverse("todo-list"),
            {
                "title": "tests",
                "status": "false",
            },
        )
        assert response.status_code == 401

    # def test_pk_crud_anonymous_response_401_status(self, get_last_object_pk, api_anonymous_client ):
    #     """
    #     for tests anonymous request in crud api
    #     """
    #     response = api_anonymous_client.get(reverse('todo-detail', kwargs={'pk': get_last_object_pk}))
    #     assert response.status_code == 401

    def test_pk_retrieve_response_200_status(
        self, api_auth_jwt_client, get_last_object_pk
    ):
        """
        for testing retrieving todo api with authenticated user
        """
        response = api_auth_jwt_client.get(
            reverse("todo-detail", kwargs={"pk": get_last_object_pk})
        )
        assert response.status_code == 200

    def test_pk_update_put_response_200_status(
        self, api_auth_jwt_client, get_last_object_pk
    ):
        """
        for testing updating with put method todo api with authenticated user
        """
        url = reverse("todo-detail", kwargs={"pk": get_last_object_pk})
        data = {
            "title": "test2",
            "status": "true",
        }
        response = api_auth_jwt_client.put(url, data)
        assert response.status_code == 200

    # def test_pk_update_patch_response_200_status(self, get_last_object_pk, api_auth_jwt_client):
    #     """
    #         for testing updating with path method todo api with authenticated user
    #     """
    #     url = reverse('todo-detail', kwargs={'pk': get_last_object_pk})
    #     data = {
    #         'status': 'false',
    #     }
    #     response = api_auth_jwt_client.patch(url, data)
    #     assert response.status_code == 200

    def test_pk_delete_response_204_status(
        self, api_auth_jwt_client, get_last_object_pk
    ):
        """
        for testing the deleting method todo api with authenticated user
        """
        url = reverse("todo-detail", kwargs={"pk": get_last_object_pk})
        response = api_auth_jwt_client.delete(url)
        assert response.status_code == 204
