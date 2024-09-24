from django.urls import  path, include

urlpatterns = [
    path('token/', include('accounts.api.v1.token.urls')),
    path('user/', include('accounts.api.v1.registration.urls')),
    path('jwt/', include('accounts.api.v1.jwt.urls')),

]