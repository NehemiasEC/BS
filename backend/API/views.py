from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .burnerserializer import BurnerSerializerModel
from .burnerserializer import CombustionAnalisisTestSerializer
from burners.models import Burner
from buildingstatux.combustion.models import CombustionAnalysisTest


from  rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response


class BurnerViewSet(ModelViewSet):
    queryset = Burner.objects.all()
    serializer_class = BurnerSerializerModel


class CombustionAnalisisTestViewSet(ModelViewSet):
    queryset = CombustionAnalysisTest.objects.all()
    serializer_class = CombustionAnalisisTestSerializer