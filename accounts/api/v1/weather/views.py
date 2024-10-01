import requests
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework.response import Response
from rest_framework.views import APIView


class WeatherAPI(APIView):
    """
    for creating api that get data from openweathermap and return it with requests lib
    """

    @method_decorator(cache_page(10 * 2 * 60))
    def get(self, request):
        url = """
            https://api.openweathermap.org/data/1/weather?q=Isfahan,iran&APPID={key}
                """

        response = requests.get(url)

        return Response(response.json())
