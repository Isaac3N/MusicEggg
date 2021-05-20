from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        #sessions is a temporary connetcion between two computers 
        if not self.request.session.exists(self.request.session.session_key): # to check whether the session exist
            self.request.session.create()

        serializer = self.serializer_class(data=request.data) # if the session exist it gets the data
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            name_of_room = serializer.data.get('name_of_room')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists(): #to check if teh host has any other rooms 
                room = queryset[0]
                room.name_of_room = name_of_room 
                room.guest_can_pause = guest_can_pause
                room.save(update_fields=['guest_can_pause', 'name_of_room'])
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause,
                            name_of_room=name_of_room)
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)