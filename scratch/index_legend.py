import requests
from google.oauth2 import service_account
from google.auth.transport.requests import Request
import json
import os

# Configuration
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
JSON_KEY_FILE = "google-credentials.json" # User must provide this
SITE_URLS = [
    "https://goelgangalegend.com/",
    "https://goelgangalegend.com/3bhk-flats-bavdhan",
    "https://goelgangalegend.com/2bhk-flats-bavdhan-pune",
    "https://goelgangalegend.com/luxury-projects-bavdhan",
    "https://goelgangalegend.com/investment-flats-bavdhan-pune",
    "https://goelgangalegend.com/sports-township-pune",
    "https://goelgangalegend.com/luxury-apartments-chandni-chowk",
    "https://goelgangalegend.com/michael-phelps-swimming-pune",
    "https://goelgangalegend.com/tagda-raho-dhoni-pune",
    "https://goelgangalegend.com/3.5-bhk-flats-bavdhan",
    "https://goelgangalegend.com/schools-hospitals-near-bavdhan",
    "https://goelgangalegend.com/rera-legal-compliance-bavdhan"
]

def get_access_token():
    if not os.path.exists(JSON_KEY_FILE):
        print(f"Error: {JSON_KEY_FILE} not found. Please upload service account credentials.")
        return None
    
    scopes = ["https://www.googleapis.com/auth/indexing"]
    credentials = service_account.Credentials.from_service_account_file(JSON_KEY_FILE, scopes=scopes)
    credentials.refresh(Request())
    return credentials.token

def index_urls():
    token = get_access_token()
    if not token:
        return

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }

    for url in SITE_URLS:
        body = {
            "url": url,
            "type": "URL_UPDATED"
        }
        response = requests.post(ENDPOINT, data=json.dumps(body), headers=headers)
        print(f"Indexing {url}: {response.status_code} - {response.text}")

if __name__ == "__main__":
    index_urls()
