from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.contrib.sessions.backends.db import SessionStore

# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class GetRoom(APIView):
    serializer_class = RoomSerializer
    lookup_url_kwarg = 'code'
    
    def get(self, request, format=None):
        print(self.request.session.session_key)
        code = request.GET.get(self.lookup_url_kwarg)
        if code != None:
            room = Room.objects.filter(code=code)
            if len(room) > 0:
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Room Code.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class JoinRoom(APIView):
    lookup_url_kwarg = 'code'

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
            print(self.request.session.session_key)
          

        code = request.data.get(self.lookup_url_kwarg)
        if code != None:
            room_result = Room.objects.filter(code=code)
            if len(room_result) > 0:
                room = room_result[0]
                self.request.session['room_code'] = code
                return Response({'message': 'Egg Joined!'}, status=status.HTTP_200_OK)

            return Response({'Bad Request': 'Invalid Egg Code'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': 'Invalid post data, could not find a code key'}, status=status.HTTP_400_BAD_REQUEST)


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        #sessions is a temporary connetcion between two computers 
        if not self.request.session.exists(self.request.session.session_key): # to check whether the session exist
            self.request.session.create()

        serializer = self.serializer_class(data=request.data) # if the session exist it gets the data
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            name_of_room = serializer.data.get('name_of_room')
            streaming_service = serializer.data.get('streaming_service')
            host = self.request.session.session_key
            print(host)
            queryset = Room.objects.filter(host=host)
            if queryset.exists(): #to check if teh host has any other rooms 
                room = queryset[0]
                room.name_of_room = name_of_room 
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.streaming_service = streaming_service
                room.save(update_fields=['guest_can_pause', 'votes_to_skip', 'name_of_room', 'created_at', 'streaming_service'])
                self.request.session['room_code'] = room.code
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause, votes_to_skip=votes_to_skip, 
                            name_of_room=name_of_room,  streaming_service=streaming_service)
                room.save()
                self.request.session['room_code'] = room.code
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED) #to return a json formatted data 

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class UserInRoom(APIView):
    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        print(self.request.session.session_key)
        data = {
            'code': self.request.session.get('room_code')
        }
        return JsonResponse(data,  status=status.HTTP_200_OK)
        #the jsonresponse takes a python dictionary then serialize then send it to the frontend 