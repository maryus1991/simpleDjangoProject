from celery import shared_task

from todo.models import Todo


@shared_task
def destroy_done_tasks_form_todo_model():
    """
    for deleting data that has been done
    """

    objects = Todo.objects.filter(done=True).delete()
    for item in objects:
        item.is_delete = True
        item.save()

    print('done!!!')

