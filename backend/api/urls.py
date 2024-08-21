from django.urls import path
from . import viewsets


urlpatterns = [
    path('all-subtitles', viewsets.ListSubtitle.as_view(), name='all-subtitles'),
    path('get/<int:pk>', viewsets.RetrieveSubtitle.as_view(), name='get'),
    path('delete/<int:pk>', viewsets.DeleteSubtitle.as_view(), name='delete'),
    path('update/<int:pk>', viewsets.UpdateSubtitle.as_view(), name='update'),
    path('create', viewsets.CreateSubtitle.as_view(), name='create'),
]
