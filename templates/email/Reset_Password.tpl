
{% extends "mail_templated/base.tpl" %}



{% block html %}
    http://localhost:8000{% url 'ResetPassword' token %}
{% endblock  %}