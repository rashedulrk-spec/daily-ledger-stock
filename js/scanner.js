/*
================================================
FILE: js/scanner.js
WHY:
- Barcode scan control
- Permission check
- Security: unauthorized scan block
================================================
*/

const session = JSON.parse(localStorage.getItem("session"));
const scannerBox = document.getElementById("scannerBox");
const scanBtn = document.getElementById("scanBtn");

if (!session.permissions.scanner) {
  scannerBox.style.display = "none";
  alert("Scanner permission denied!");
}

/* ===============================
SCAN START
================================ */
function startScan() {
  if (!session.permissions.scanner) return;

  alert("Scanner Activated");
  // ZXing scan logic here
}
