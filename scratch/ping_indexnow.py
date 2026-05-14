import requests
import json

urls = [
    "https://goelgangalegend.com/",
    "https://goelgangalegend.com/3bhk-flats-bavdhan",
    "https://goelgangalegend.com/3.5-bhk-flats-bavdhan",
    "https://goelgangalegend.com/sports-township-pune",
    "https://goelgangalegend.com/luxury-projects-bavdhan",
    "https://goelgangalegend.com/michael-phelps-swimming-pune"
]

data = {
    "host": "goelgangalegend.com",
    "key": "76ac4b2ed3bea703a08b1ccfca84ed3bea703a08b1ccfca84",
    "keyLocation": "https://goelgangalegend.com/76ac4b2ed3bea703a08b1ccfca84ed3bea703a08b1ccfca84.txt",
    "urlList": urls
}

print("Pinging IndexNow (Bing/Yandex)...")
try:
    response = requests.post("https://api.indexnow.org/indexnow", json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"IndexNow failed: {e}")
