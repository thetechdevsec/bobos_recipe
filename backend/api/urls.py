from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserCreate.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<uuid:pk>/', views.UserDetail.as_view()),
]