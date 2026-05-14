import urllib.request
import json

url = "https://script.google.com/macros/s/AKfycbyeBBq1zKvx5Cmu3wpgdzuhSw0z465b3iQyH_mPeTJKNAlFBAlm41DBNPkZYBLXimv2/exec"
data = {
    "name": "Test Webhook",
    "email": "test@webhook.com",
    "message": "Testing the sovereign pipeline."
}

req = urllib.request.Request(
    url, 
    data=json.dumps(data).encode('utf-8'), 
    headers={'Content-Type': 'text/plain'} # Simulating no-cors fetch payload
)

try:
    response = urllib.request.urlopen(req)
    print("Status:", response.status)
    print("Body:", response.read().decode('utf-8'))
except Exception as e:
    print("Error:", str(e))
