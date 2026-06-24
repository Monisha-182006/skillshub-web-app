from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    skill = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Resume(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    skill = models.CharField(max_length=100)

    def __str__(self):
        return self.name