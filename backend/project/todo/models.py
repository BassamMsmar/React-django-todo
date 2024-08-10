from django.db import models
from django.utils import timezone

TODO_STATUS = (("Done", "Done"), ("InProgress", "InProgress"))


class Todo(models.Model):
    title = models.CharField(max_length=100)
    detile = models.TextField(blank=True)
    status = models.TextField(blank=True , choices=TODO_STATUS)
    created=models.DateTimeField(default=timezone.now)
    # completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
