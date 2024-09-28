from django.urls import path
from .views import CustomObtainAuthenticationToken, CustomLogoutAuthToken

urlpatterns = [
    path("login/", CustomObtainAuthenticationToken.as_view()),
    path("logout/", CustomLogoutAuthToken.as_view()),
]
