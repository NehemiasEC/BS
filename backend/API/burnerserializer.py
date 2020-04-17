from rest_framework import serializers
from burners.models import Burner


class BurnerSeriliazerModel(serializers.ModelSerializer):

    class Meta:
        model = Burner
        fields = ['id','name','model','min_pressure','fuel_type']