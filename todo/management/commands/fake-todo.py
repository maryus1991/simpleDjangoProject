import random

from django.core.management import BaseCommand

from faker import Faker
from todo.models import Todo

choice = (True, False)


class Command(BaseCommand):
    """

    for create dummy data for todo model for testing

    """
    help = 'Creates fake data for Todo model'

    def handle(self, *args, **options):
        faker = Faker()
        for _ in range(5):
            Todo.objects.create(
                title=faker.name(),
                done=random.choice(choice),
                user_id=13
            ).save()

        print('done!!!')