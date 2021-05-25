#serializers allows complex data such as querysets and model instances to be converted to native python datatypes t
#that can the be easily be rendered into json data 

from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip',
                  'name_of_room', 'created_at', 'streaming_service')


class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ( 'name_of_room','guest_can_pause', 'votes_to_skip', 'streaming_service')

class UpdateRoomSerializer(serializers.ModelSerializer):
    code = serializers.CharField(validators=[])#to override the unique field 
    class Meta:
        model = Room
        fields = ('name_of_room', 'guest_can_pause', 'votes_to_skip', 'code')
