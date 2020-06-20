from rest_framework import serializers
from burners.models import Burner
from buildingstatux.combustion.models import CombustionAnalysisTest

class BurnerSerializerModel(serializers.ModelSerializer):

    class Meta:
        model = Burner
        fields = ("__all__")


class CombustionAnalisisTestSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CombustionAnalysisTest
        fields = ("__all__")
