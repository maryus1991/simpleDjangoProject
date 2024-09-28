from django import forms

from .models import Todo


class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ["title"]
        widgets = {
            "title": forms.TextInput(
                attrs={"class": "form-control m-auto", "placeholder": "Enter a title"}
            ),
        }


class TodoDoneCheckForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ["done"]
        widgets = {
            "title": forms.CheckboxInput(
                attrs={
                    "class": "form-control m-auto",
                }
            ),
        }
