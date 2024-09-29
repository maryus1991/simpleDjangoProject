from django.contrib.auth.models import User
from django.db import models


# User = get_user_model()


class TodoManager(models.Manager):
    """
    todo manager class that show just undeleted objects
    """

    def get_queryset(self):
        return super().get_queryset().filter(is_delete=False)


# Create your models here.
class Todo(models.Model):
    """
    creating todo models
    """
    title = models.CharField(max_length=100)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    done_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_delete = models.BooleanField(default=False)

    objects = TodoManager()

    def __str__(self):
        return self.title
