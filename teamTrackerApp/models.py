from django.db import models

class Team(models.Model):
    name        = models.CharField(max_length=100)
    picture     = models.CharField(max_length=300)
    website     = models.CharField(max_length=300)

class Merchandise(models.Model):
    description  = models.CharField(max_length=100)
    picture      = models.CharField(max_length=300)
    price        = models.CharField(max_length=10)
    availability = models.BooleanField()
    website      = models.CharField(max_length=300)
    team         = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='merchandise')

class Schedule(models.Model):
    name       = models.CharField(max_length=50)
    date       = models.CharField(max_length=8)
    time       = models.CharField(max_length=10)
    location   = models.CharField(max_length=100)
    website    = models.CharField(max_length=300)
    team       = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='schedule')