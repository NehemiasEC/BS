from django.urls import path, include
from rest_framework import routers
from .views import BurnerViewSet, CombustionAnalisisTestViewSet



router = routers.DefaultRouter()

router.register('burners',BurnerViewSet)
router.register('combustion',CombustionAnalisisTestViewSet)

urlpatterns = [
    path('',include(router.urls))
]

