from django.urls import path, include
from .views import RegisterView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("api/v1/token/", include("accounts.api.v1.token.urls")),
    path("api/v1/user/", include("accounts.api.v1.registration.urls")),
    path("api/v1/jwt/", include("accounts.api.v1.jwt.urls")),
    path("api/v1/weather/", include("accounts.api.v1.weather.urls")),
]
