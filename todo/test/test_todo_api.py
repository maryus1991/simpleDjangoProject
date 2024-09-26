import pytest
from django.urls import reverse
from rest_framework.test import APIClient


@pytest.fixture
def api_client():

    return APIClient()


@pytest.mark.django_db
class TestTodoApi():
    def test_get_response_200_status(self, api_client):
        response = api_client.get(reverse('todo-list'))
        assert response.json() == 200

    def test_post_response_201_status(self):
        pass

    def test_pk_delete_response_204_status(self): pass

    def test_pk_update_put_response_200_status(self): pass

    def test_pk_update_patch_response_200_status(self): pass

    def test_pk_retrieve_response_200_status(self): pass
