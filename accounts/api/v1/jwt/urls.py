from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView
from .views import CustomTokenObtainPairView


urlpatterns = [
    path("get-token/", CustomTokenObtainPairView.as_view(), name="jwt_get_token"),
    path("refresh/", TokenRefreshView.as_view(), name="jwt_refresh"),
    path("verify/", TokenVerifyView.as_view(), name="jwt_verify"),
]
