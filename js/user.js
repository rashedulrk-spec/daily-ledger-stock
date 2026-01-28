/*
================================================
FILE: js/user.js
WHY:
- Permission control
- Business wise data access
================================================
*/

const session = JSON.parse(localStorage.getItem("session"));

if (!session) location.href = "index.html";

/* ===============================
PERMISSION CONTROL
================================ */
const perms = session.permissions;

if (!perms.sale)   sale.style.display = "none";
if (!perms.stock)  stock.style.display = "none";
if (!perms.profit) profit.style.display = "none";

/* ===============================
BUSINESS FILTER (CORE)
WHY:
- অন্য ব্যবসার data যেন না দেখে
================================ */
const BUSINESS_ID = session.businessId;

/*
EXAMPLE:
Stock load করলে future এ হবে:
stockLogs.filter(s => s.businessId === BUSINESS_ID)
*/
console.log("Active Business:", BUSINESS_ID);
