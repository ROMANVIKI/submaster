from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
)
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import SubtitleSerializer
from .models import Subtitle
from datetime import timedelta
from django.db.models import F
from django.utils import timezone
from rest_framework import filters

class ListSubtitle(ListAPIView):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'language', 'description']
    ordering_fields = ['uploaded_at', 'rating', 'number_of_downloads']
    ordering = ['-uploaded_at']



class RetrieveSubtitle(RetrieveAPIView):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer
    permission_classes = [AllowAny]


class DeleteSubtitle(DestroyAPIView):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer
    permission_classes = [IsAuthenticated]


class CreateSubtitle(CreateAPIView):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer
    permission_classes = [IsAuthenticated]


class UpdateSubtitle(UpdateAPIView):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer
    permission_classes = [IsAuthenticated]

class LastMonthSubtitle(ListAPIView):
    serializer_class = SubtitleSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        thirty_days_ago = timezone.now() - timedelta(days=30)
        return Subtitle.objects.filter(uploaded_at__gte=thirty_days_ago)



class MostRatedSubtitle(ListAPIView):
    serializer_class = SubtitleSerializer
    permission_classes = [AllowAny]
    queryset = Subtitle.objects.all().order_by('-rating')



class MostDownloadedSubtitle(ListAPIView):
    serializer_class = SubtitleSerializer
    queryset = Subtitle.objects.all().order_by('-number_of_downloads')
    permission_classes = [AllowAny]


    
