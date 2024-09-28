from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairViewSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        validated_data = super().validate(attrs)
        validated_data["username"] = self.user.username
        validated_data["user_id"] = self.user.pk

        if self.user.is_active:
            return validated_data
        raise serializers.ValidationError({"detail": "please activate your accounts"})
