from rest_framework import serializers
from .models import Team, Merchandise, Schedule

class TeamSerializer(serializers.ModelSerializer):
    class Meta: 
        model   = Team
        fields  = ['id', 'name', 'picture', 'website']

class MerchandiseSerializer(serializers.ModelSerializer):
    class Meta: 
        model    = Merchandise
        fields   = ['id','description', 'picture', 'price', 'availability','website','team' ]

class ScheduleSerializer(serializers.ModelSerializer):
    class  Meta:
        model  = Schedule
        fields  = ['id', 'name', 'date', 'time','location', 'website','team']