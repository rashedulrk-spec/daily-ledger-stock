let stock = JSON.parse(localStorage.getItem("stock")) || [];

// Add product
function addProduct(name, qty, buy, sell) {
  stock.push({
    name,
    qty: Number(qty),
    buy: Number(buy),
    sell: Number(sell)
  });
  localStorage.setItem("stock", JSON.stringify(stock));
  renderStock();
}

// Render stock table
function renderStock() {
  const tbody = document.getElementById("stock-body");
  tbody.innerHTML = "";

  stock.forEach((p, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.qty}</td>
      <td>৳${p.buy}</td>
      <td>৳${p.sell}</td>
      <td>
        <button class="delete-btn" onclick="deleteProduct(${i})">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteProduct(i) {
  if (!confirm("Delete product?")) return;
  stock.splice(i, 1);
  localStorage.setItem("stock", JSON.stringify(stock));
  renderStock();
}

renderStock();

document.getElementById("stock-form").addEventListener("submit", e => {
  e.preventDefault();

  addProduct(
    pname.value,
    pqty.value,
    pbuy.value,
    psell.value
  );

  e.target.reset();
});

