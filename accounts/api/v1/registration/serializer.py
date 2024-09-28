from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers

User = get_user_model()


class UserModelSerializerRegistration(serializers.ModelSerializer):
    conform_password = serializers.CharField(write_only=True, max_length=255)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'conform_password']
        ref_name = 'User Registrations'

    def validate(self, attrs):
        if attrs.get('password') != attrs.get('conform_password'):
            raise serializers.ValidationError({
                'details': 'your passwords does not match'
            })
        try:
            validate_password(attrs.get('password'))

        except ValidationError as error:
            raise serializers.ValidationError(
                {'password': list(error.messages)}
            )

        return super().validate(attrs)

    def create(self, validated_data):
        User.objects.create_user(
            username=validated_data.get("username"),
            email=validated_data.get("email"),
            password=validated_data.get("password"),
        )
        return validated_data


class UserModelSerializerProfile(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active', 'date_joined', 'last_login']
        read_only_fields = ['is_staff', 'is_active', 'date_joined', 'last_login']


class UserModelSerializerChangePass(serializers.ModelSerializer):
    conform_new_password = serializers.CharField(write_only=True, max_length=255)
    new_password = serializers.CharField(max_length=255)

    class Meta:
        model = User
        fields = ['password', 'new_password', 'conform_new_password']

    def validate(self, attrs):
        if attrs.get('new_password') != attrs.get('conform_new_password'):
            raise serializers.ValidationError({'detail': 'your new password is not match'})

        try:
            validate_password(attrs.get('new_password'))
        except ValidationError as error:
            raise serializers.ValidationError(
                {"password": list(error.messages)}
            )
        return super().validate(attrs)


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)


class UserModelSerializerResetPass(serializers.Serializer):
    new_password = serializers.CharField(max_length=255)
    conform_new_password = serializers.CharField(write_only=True, max_length=255)

    def validate(self, attrs):
        if attrs.get('new_password') != attrs.get('conform_new_password'):
            raise serializers.ValidationError({'detail': 'your new password is not match'})

        # try:
        #     validate_password(attrs.get('new_password'))
        # except ValidationError as error:
        #     raise serializers.ValidationError(
        #         {"password": list(error.messages)}
        #     )
        return super().validate(attrs)
