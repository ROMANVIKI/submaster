# models.py

from django.db import models
from django.contrib.auth.models import User

class Subtitle(models.Model):
    title = models.CharField(max_length=255)
    language = models.CharField(max_length=50)
    fps = models.FloatField()
    contributor = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='subtitles')
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    number_of_downloads = models.IntegerField(default=0)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    thumbnail = models.FileField(upload_to='thumbnail/')  
    file = models.FileField(upload_to='subtitles/')  
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} - {self.language}"

    class Meta:
        ordering = ['-uploaded_at']
