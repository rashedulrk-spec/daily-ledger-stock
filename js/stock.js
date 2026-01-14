// ===============================
// STOCK MANAGEMENT
// ===============================

let stockItems = JSON.parse(localStorage.getItem("stock")) || [];

// ---- Render Stock Table ----
function renderStock() {
  const tbody = document.getElementById("stock-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  stockItems.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.product}</td>
      <td>${item.qty}</td>
      <td data-stock="${item.type}">
        ${item.type === "in" ? "Stock In" : "Stock Out"}
      </td>
      <td>
        <button class="delete-btn" onclick="deleteStock(${index})">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ---- Delete Stock ----
function deleteStock(index) {
  if (!confirm("Delete this stock entry?")) return;
  stockItems.splice(index, 1);
  localStorage.setItem("stock", JSON.stringify(stockItems));
  renderStock();
}

// ---- Add Stock ----
const stockForm = document.getElementById("stock-form");

if (stockForm) {
  stockForm.addEventListener("submit", e => {
    e.preventDefault();

    const product = document.getElementById("product").value;
    const qty = parseInt(document.getElementById("qty").value);
    const type = document.getElementById("stock-type").value;

    stockItems.push({
      product,
      qty,
      type,
      date: new Date().toISOString().slice(0, 10)
    });

    localStorage.setItem("stock", JSON.stringify(stockItems));
    renderStock();
    e.target.reset();
  });
}

// ---- Init ----
renderStock();
