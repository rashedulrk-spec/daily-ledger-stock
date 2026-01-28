/*
================================================
FILE: js/profit.js
WHY:
- Monthly profit calculation
- Business-wise report
================================================
*/

const session = JSON.parse(localStorage.getItem("session"));
const BUSINESS_ID = session.businessId;

let sales = JSON.parse(localStorage.getItem("sales")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const month = new Date().getMonth();

let totalSale = 0;
let totalCost = 0;

/* ===============================
FILTER BY BUSINESS & MONTH
================================ */
sales.filter(s =>
  s.businessId === BUSINESS_ID &&
  new Date(s.date).getMonth() === month
).forEach(s => totalSale += s.total);

expenses.filter(e =>
  e.businessId === BUSINESS_ID &&
  new Date(e.date).getMonth() === month
).forEach(e => totalCost += e.amount);

const profit = totalSale - totalCost;

document.getElementById("profitResult").innerHTML = `
  <h3>Monthly Report</h3>
  <p>Sale: ${totalSale}</p>
  <p>Expense: ${totalCost}</p>
  <p><b>Profit: ${profit}</b></p>
`;
