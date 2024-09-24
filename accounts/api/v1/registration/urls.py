from django.urls import path
from .views import RegistrationAPIView, UpdateProfile, ChangePassword, ActivationsAPIView, ResetPassWordSendEmail, ResetPassWordFromToken


urlpatterns = [
    path('registration/', RegistrationAPIView.as_view()),
    path('profile/', UpdateProfile.as_view()),
    path('change_password/', ChangePassword.as_view()),
    path('conform/<str:token>', ActivationsAPIView.as_view(),  name='conform-account'),
    path('reset-password/', ResetPassWordSendEmail.as_view()),
    path('reset-password/<str:token>', ResetPassWordFromToken.as_view(),  name='ResetPassword'),
]