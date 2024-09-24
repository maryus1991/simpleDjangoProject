import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError
from mail_templated import EmailMessage
from rest_framework import status
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializer import UserModelSerializerRegistration, UserModelSerializerProfile, UserModelSerializerChangePass, \
    ResetPasswordSerializer , UserModelSerializerResetPass
from .utils import SendEmailThread

User = get_user_model()


class ResetPassWordFromToken(GenericAPIView):
    serializer_class = UserModelSerializerResetPass
    model = User

    def get(self, request, token, *arg, **kwargs):
        return Response(
            {'token': token},
            status=status.HTTP_202_ACCEPTED,
        )

    def post(self, request, token, *arg, **kwargs):

        try:
            token = jwt.decode(
                token, settings.SECRET_KEY, algorithms=["HS256"]
            )
            user_id = token.get("user_id")

        except ExpiredSignatureError:
            return Response(
                {"details": "token has been Expired"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except InvalidSignatureError:
            return Response(
                {"details": "token is not valid"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user_obj = User.objects.filter(id=user_id).first()

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_obj.set_password(serializer.validated_data.get('new_password'))

        return Response(
             'your password has been change'
        ,
            status=status.HTTP_202_ACCEPTED,
        )


class ResetPassWordSendEmail(GenericAPIView):
    serializer_class = ResetPasswordSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data.get('email')
        user = get_object_or_404(User, email=email)
        token = self.get_token_for_user(user)

        email_message = EmailMessage(
            "email/Reset_Password.tpl",
            {"token": token},
            settings.EMAIL_HOST_USER,
            to=[email],
        )
        SendEmailThread(email_message).start()
        return Response(status=status.HTTP_202_ACCEPTED)

    def get_token_for_user(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)


class ActivationsAPIView(GenericAPIView):
    def get(self, request, token, *arg, **kwargs):
        try:
            token = jwt.decode(
                token, settings.SECRET_KEY, algorithms=["HS256"]
            )
            user_id = token.get("user_id")

        except ExpiredSignatureError:
            return Response(
                {"details": "token has been Expired"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except InvalidSignatureError:
            return Response(
                {"details": "token is not valid"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user_obj = User.objects.filter(id=user_id).first()
        if user_obj.is_staff:
            return Response(
                "your account has been activate before",
                status=status.HTTP_208_ALREADY_REPORTED,
            )

        user_obj.is_staff = True
        user_obj.is_active = True
        user_obj.save()
        return Response(
            "your account has been activate successfully",
            status=status.HTTP_201_CREATED,
        )


class RegistrationAPIView(GenericAPIView):
    serializer_class = UserModelSerializerRegistration

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            serializer.save()

            user_obj = get_object_or_404(User, email=email)
            token = self.get_token_for_user(user_obj)

            email_message = EmailMessage(
                "email/activations.tpl",
                {"token": token},
                settings.EMAIL_HOST_USER,
                to=[email],
            )
            SendEmailThread(email_message).start()

            return Response({
                'detail': 'your account create successfully and send email'
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'detail': 'invalid request'
            }, status=status.HTTP_400_BAD_REQUEST)

    def get_token_for_user(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)


class UpdateProfile(RetrieveUpdateAPIView):
    serializer_class = UserModelSerializerProfile
    model = User
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user = self.request.user
        return user


class ChangePassword(UpdateAPIView):
    model = User
    permission_classes = [IsAuthenticated]
    serializer_class = UserModelSerializerChangePass

    def get_object(self):
        user = self.request.user
        return user

    def put(self, request, *arg, **kwargs):

        user = self.get_object()
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():

            if not user.check_password(serializer.data.get('password')):
                return Response(
                    {"current_password": "wrong password"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            user.set_password(serializer.data.get('new_password'))
            user.save()

            return Response(
                {"details": "your password has been change successfully", },
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
