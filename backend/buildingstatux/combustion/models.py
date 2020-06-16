from django.db import models

from burners.models import Burner
from buildingstatux.analisis.models import Analisis

# Create your models here.


class CombustionAnalysisTest(models.Model):
    date=models.DateTimeField(auto_now_add=True)
    burner = models.ForeignKey(Burner, on_delete = models.CASCADE, related_name='Burner')
    stack_temperature = models.DecimalField(decimal_places=2, max_digits=5)
    carbon_dioxide = models.DecimalField(decimal_places=2,max_digits=4)
    efficiency= models.DecimalField(decimal_places=2,max_digits=4)
    excess_air = models.DecimalField(decimal_places=2,max_digits=4)
    oxigen = models.DecimalField(decimal_places=2, max_digits=4)
    carbon_monoxide = models.DecimalField(max_digits=4, decimal_places=2)

    analisis = models.ForeignKey(Analisis, on_delete=models.CASCADE, null=True, blank=True, related_name='Analisis')

    def __str__(self):
        return "Date: {0} burner: {1}".format(self.date, self.burner.name)
    


