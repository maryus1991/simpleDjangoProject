from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls.base import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView

from todo.models import Todo
from .forms import TodoForm


# Create your views here.
class TodoListView(LoginRequiredMixin, ListView):
    model = Todo
    queryset = Todo.objects.all()
    context_object_name = 'todos'
    template_name = 'todo/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['add_form'] = TodoForm()
        return context


class TodoCreateView(LoginRequiredMixin, CreateView):
    form_class = TodoForm
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class TodoUpdateView(LoginRequiredMixin, UpdateView):
    model = Todo
    fields = ['done', 'title']
    success_url = reverse_lazy('index')


class TodoDeleteView(LoginRequiredMixin, DeleteView):
    model = Todo
    success_url = reverse_lazy('index')

