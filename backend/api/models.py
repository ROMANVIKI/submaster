from django.db import models
from django.contrib.auth.models import User

class Subtitle(models.Model):
    title = models.CharField(max_length=255)  # Title of the subtitle file
    language = models.CharField(max_length=50)  # Language of the subtitle
    fps = models.FloatField()  # Frames per second of the video
    contributor = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='subtitles')  # User who uploaded the subtitle
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)  # Rating of the subtitle
    number_of_downloads = models.IntegerField(default=0)  # Number of downloads
    uploaded_at = models.DateTimeField(auto_now_add=True)  # Date and time when the subtitle was uploaded
    thumbnail = models.FileField(upload_to='thumbnail/', default=False)
    file = models.FileField(upload_to='subtitles/')  # File path to the subtitle file
    description = models.TextField(blank=True)  # Optional description of the subtitle
    # is_active = models.BooleanField(default=True)  # Whether the subtitle is active or not

    def __str__(self):
        return f"{self.title} - {self.language}"        

    class Meta:
        ordering = ['-uploaded_at']  
