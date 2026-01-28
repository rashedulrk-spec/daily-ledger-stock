/*
====================================
INVOICE GENERATOR
WHY:
- License sale receipt
====================================
*/

function printInvoice(key, months, amount) {
  const win = window.open("", "_blank");

  win.document.write(`
    <h2>Ai Tec Software Invoice</h2>
    <p>License Key: ${key}</p>
    <p>Duration: ${months} Month</p>
    <p>Amount: ${amount} BDT</p>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <button onclick="window.print()">Print</button>
  `);
}
