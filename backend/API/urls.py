from django.urls import path, include
from rest_framework import routers
from .views import BurnerViewSet



router = routers.DefaultRouter()

router.register('burners',BurnerViewSet)

urlpatterns = [
    path('',include(router.urls))
]

