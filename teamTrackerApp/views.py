from rest_framework import viewsets
from .serializers import TeamSerializer, MerchandiseSerializer, ScheduleSerializer
from .models import Team, Merchandise, Schedule

class TeamViewSet(viewsets.ModelViewSet):
    queryset         = Team.objects.all()
    serializer_class = TeamSerializer

class MerchandiseViewSet(viewsets.ModelViewSet):
    queryset         =  Merchandise.objects.all()
    serializer_class =  MerchandiseSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset         = Schedule.objects.all()
    serializer_class = ScheduleSerializer

