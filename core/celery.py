import os

from celery import Celery

from todo.tasks import destroy_done_tasks_form_todo_model

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
app = Celery("core")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()


@app.on_after_finalize.connect
def setup_periodic_tasks(sender, **kwargs):
    """
    for run the destroy_done_tasks_form_todo_model func every 10 min
    """
    sender.add_periodic_task(
        10 * 60,
        destroy_done_tasks_form_todo_model.s(),
        name="Destroy Done Tasks Every 10 min",
    )
