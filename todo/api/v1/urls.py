from rest_framework.routers import DefaultRouter

from .views import TodoModelViewSet

router = DefaultRouter()
router.register("todo", TodoModelViewSet, basename="todo")
urlpatterns = router.urls
