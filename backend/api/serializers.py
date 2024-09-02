from rest_framework.serializers import ModelSerializer
from . import models

class UserSerializer(ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id',  'first_name', 'last_name', 'email', 'password', 'date_joined', 'updated_at']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        return models.User.objects.create_user(**validated_data)