import random

from django.core.management import BaseCommand
from django.contrib.auth import get_user_model
from faker import Faker
from todo.models import Todo

choice = (True, False)
User = get_user_model()


class Command(BaseCommand):
    """

    for create dummy data for todo model for testing

    """

    help = "Creates fake data for Todo model"

    def handle(self, *args, **options):

        user: User = User.objects.get_or_create(
            username="root", email="maryus19915123@gmail.com"
        )
        faker = Faker()

        if user[1]:
            user.set_password(123)
            user.save()

        for _ in range(5):
            Todo.objects.create(
                title=faker.name(), done=random.choice(choice), user=user[0]
            ).save()

        print("done!!!")
