from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UserProfile, Resume
import json


# ---------------- HOME ----------------

def home(request):
    return JsonResponse({
        "message": "Welcome to SkillsHub API"
    })


# ---------------- COURSES ----------------

def courses(request):
    return JsonResponse({
        "courses": [
            "Python",
            "Java",
            "React",
            "Django"
        ]
    })


# ---------------- USERS ----------------

def users(request):
    data = list(UserProfile.objects.values())
    return JsonResponse(data, safe=False)


# ---------------- REGISTER ----------------

@csrf_exempt
def register(request):
    if request.method == "POST":

        data = json.loads(request.body)

        if UserProfile.objects.filter(email=data["email"]).exists():
            return JsonResponse(
                {"message": "Email already registered"},
                status=400
            )

        UserProfile.objects.create(
            name=data["name"],
            email=data["email"],
            mobile=data["mobile"],
            password=data["password"]
        )

        return JsonResponse({
            "message": "Registration Successful"
        })

    return JsonResponse({
        "message": "Only POST method allowed"
    })


# ---------------- LOGIN ----------------

@csrf_exempt
def login(request):
    if request.method == "POST":

        data = json.loads(request.body)

        try:
            user = UserProfile.objects.get(
                email=data["email"],
                password=data["password"]
            )

            return JsonResponse({
                "message": "Login Successful",
                "user": user.name,
                "email": user.email,
                "mobile": user.mobile
            })

        except UserProfile.DoesNotExist:
            return JsonResponse({
                "message": "Invalid Email or Password"
            }, status=401)

    return JsonResponse({
        "message": "Only POST method allowed"
    })


# ---------------- SAVE RESUME ----------------

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
            "message": "Resume Saved Successfully"
        })

    return JsonResponse({
        "message": "Only POST method allowed"
    })