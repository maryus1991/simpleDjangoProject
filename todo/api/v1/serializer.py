from django.contrib.auth import get_user_model
from rest_framework import serializers

from todo.models import Todo

User = get_user_model()


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'id', 'email']


class TodoModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer(read_only=True)

    class Meta:
        model = Todo
        fields = ['id', 'title', 'done', 'created_at', 'done_at', 'user']

    def create(self, validated_data):
        validated_data['user'] = self.context.get('request').user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        validated_data['user'] = self.context.get('request').user
        return super().update(instance, validated_data)
