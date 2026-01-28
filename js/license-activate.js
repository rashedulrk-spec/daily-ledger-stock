/*
====================================
LICENSE ACTIVATE
WHY:
- Bind license to this browser/device
====================================
*/

function activateLicense() {
  const key = document.getElementById("licenseKey").value.trim();
  const data = localStorage.getItem("license_master_" + key);

  if (!data) {
    alert("Invalid License Key");
    return;
  }

  const license = JSON.parse(data);

  license.active = true;
  localStorage.setItem("license", JSON.stringify(license));

  alert("License Activated Successfully!");
  location.href = "../login.html";
}
