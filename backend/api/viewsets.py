from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import SubtitleSerializer
from .models import Subtitle


class ListSubtitle(ListAPIView):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer
    permission_classes = [AllowAny]



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