from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from todo.models import Todo
from .serializer import TodoModelSerializer
from .paginations import TodoPagination
from .permissions import IsOwnerOrReadOnly
# Create your views here.


class TodoModelViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = TodoModelSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['title', 'done']
    filter_fields = ['title', 'done']
    ordering_fields = ['done_at','created_at']
    pagination_class = TodoPagination

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).all()