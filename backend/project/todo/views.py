from django.shortcuts import render

from .serilizer import TodoSerializer
from .models import Todo
from rest_framework import viewsets


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()