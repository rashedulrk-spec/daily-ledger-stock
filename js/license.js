/*
====================================
LICENSE CHECK
WHY:
- Block system if expired
====================================
*/

(function checkLicense() {
  const license = JSON.parse(localStorage.getItem("license"));

  if (!license) {
    alert("License Required");
    location.href = "license/activate.html";
    return;
  }

  if (Date.now() > license.expire) {
    alert("License Expired");
    localStorage.removeItem("license");
    location.href = "license/activate.html";
  }
})();
