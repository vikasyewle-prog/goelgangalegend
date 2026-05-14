const url = "https://script.google.com/macros/s/AKfycbyeBBq1zKvx5Cmu3wpgdzuhSw0z465b3iQyH_mPeTJKNAlFBAlm41DBNPkZYBLXimv2/exec";

const payload = {
  name: "Vikas Final Node Test",
  project: "Legend County",
  email: "test@domain.com"
};

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.text())
.then(text => {
  console.log("RESPONSE:", text.substring(0, 500));
})
.catch(err => console.error("ERROR:", err));
