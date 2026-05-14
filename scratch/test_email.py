import urllib.request
import json

url = "https://formsubmit.co/ajax/propsmartrealty@gmail.com"
data = {
    "name": "Test Lead",
    "email": "test@example.com",
    "message": "This is a test to trigger the activation email."
}
headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers)
try:
    response = urllib.request.urlopen(req)
    print("Response Status:", response.status)
    print("Response Body:", response.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print("HTTP Error:", e.code, e.read().decode('utf-8'))
except Exception as e:
    print("Error:", str(e))
