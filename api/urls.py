from django.urls import path
from .views import home, courses, users, save_resume

urlpatterns = [
    path('', home),
    path('courses/', courses),
    path('users/', users),
    path('save-resume/', save_resume),
]