from django.db import models




TYPE_OF_FUEL_CHOICES = [
    ('GAS','Natural Gas'),
    ('N2 OIL',"Number 2 Oil")
]
# Create your models here.
class Burner(models.Model):
    name = models.CharField(max_length=200)
    model = models.CharField(max_length=100)
    min_pressure = models.DecimalField(decimal_places=2,max_digits=5)
    fuel_type = models.CharField(choices=TYPE_OF_FUEL_CHOICES, max_length=10, default="GAS")

    

    def __str__(self):
        return "{0}".format(self.name)


