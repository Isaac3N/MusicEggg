#serializers allows complex data such as querysets and model instances to be converted to native python datatypes t
#that can the be easily be rendered into json data 

from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause',
                  'name_of_room', 'created_at')


class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'name_of_room', "name_of_room", "created_at")