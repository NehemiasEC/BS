from django.apps import AppConfig
from .models import Burner



class BurnersConfig(AppConfig):
    name = 'burners'


"""import requests
from webpack_loader.loader import WebpackLoader

class ExternalWebpackLoader(WebpackLoader):

  def load_assets(self):
    url = self.config['STATS_URL']
    return requests.get(url).json()"""

