from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UserProfile, Resume
import json

def home(request):
    return JsonResponse({
        "message": "Welcome to SkillsHub API",
        "status": "success"
    })

def courses(request):
    return JsonResponse({
        "courses": [
            "Python",
            "Java",
            "React",
            "Django"
        ]
    })

def users(request):
    data = list(UserProfile.objects.values())
    return JsonResponse(data, safe=False)

@csrf_exempt
def save_resume(request):
    if request.method == "POST":
        data = json.loads(request.body)

        Resume.objects.create(
            name=data["name"],
            email=data["email"],
            skill=data["skill"]
        )

        return JsonResponse({
            "message": "Resume saved successfully"
        })

    return JsonResponse({
        "message": "Only POST method allowed"
    })