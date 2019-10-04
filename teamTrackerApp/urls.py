from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'team', views.TeamViewSet)
router.register(r'merchandise', views.MerchandiseViewSet)
router.register(r'schedule', views.ScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]