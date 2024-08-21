from rest_framework.serializers import ModelSerializer
from .models import Subtitle



class SubtitleSerializer(ModelSerializer):
    class Meta:
        model = Subtitle
        fields = '__all__'