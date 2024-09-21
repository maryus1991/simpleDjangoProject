from django.contrib.auth.models import User
from django.db import models

'''
creating todo models
'''


# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    done_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
