from rest_framework_simplejwt.views import TokenObtainPairView

from .serializer import CustomTokenObtainPairViewSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairViewSerializer
