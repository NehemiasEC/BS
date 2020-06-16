from django.db import models
import uuid
from burners.models import Burner

# Create your models here.
class Analisis(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    burner = models.ForeignKey(Burner, on_delete=models.CASCADE)


    def __str__(self):
        return "{0} analisis number:{1}".format(self.burner.name, self.id)
    





