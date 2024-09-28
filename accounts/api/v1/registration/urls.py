from django.urls import path
from .views import RegistrationAPIView, UpdateProfile, ChangePassword, ActivationsAPIView, ResetPassWordSendEmail, ResetPassWordFromToken


urlpatterns = [
    path('registration/', RegistrationAPIView.as_view(), name='registration-api'),
    path('profile/', UpdateProfile.as_view(), name='update-profile'),
    path('change_password/', ChangePassword.as_view(), name='change-password'),
    path('conform/<str:token>', ActivationsAPIView.as_view(),  name='conform-account'),
    path('reset-password/', ResetPassWordSendEmail.as_view(), name='resetPasswordSendEmail'),
    path('reset-password/<str:token>', ResetPassWordFromToken.as_view(),  name='ResetPassword'),
]