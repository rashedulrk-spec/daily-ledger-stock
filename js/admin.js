/*
================================================
FILE: js/admin.js
WHY:
- Business create
- User create with businessId
================================================
*/

let users = JSON.parse(localStorage.getItem("users")) || [];
let businesses = JSON.parse(localStorage.getItem("businesses")) || [];

const list = document.getElementById("userList");
/*
================================================
BUSINESS DROPDOWN RENDER
WHY:
- Admin যেন user create করার সময় business select করতে পারে
================================================
*/

const bizSelect = document.getElementById("bizSelect");

function renderBizDropdown() {
  bizSelect.innerHTML = "";
  businesses.forEach(b => {
    bizSelect.innerHTML += `<option value="${b.id}">${b.name}</option>`;
  });
}

renderBizDropdown();

/* ===============================
USER CREATE (UPDATED)
================================ */
users.push({
  username: uName.value,
  password: uPass.value,
  role: "user",
  businessId: bizSelect.value,
  permissions: {
    sale: pSale.checked,
    stock: pStock.checked,
    profit: pProfit.checked,
    scanner: pScanner.checked
  }
});


/* ===============================
BUSINESS CREATE
WHY:
- Multi shop support
================================ */
bizForm.addEventListener("submit", e => {
  e.preventDefault();

  const id = "biz_" + Date.now();

  businesses.push({
    id,
    name: bizName.value
  });

  localStorage.setItem("businesses", JSON.stringify(businesses));
  alert("Business created");
  bizForm.reset();
});

/* ===============================
USER CREATE
WHY:
- User এর সাথে business bind
================================ */
userForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!businesses.length) {
    alert("Create business first!");
    return;
  }

  users.push({
    username: uName.value,
    password: uPass.value,
    role: "user",
    businessId: businesses[0].id, // 👉 simple version (later dropdown)
    permissions: {
      sale: pSale.checked,
      stock: pStock.checked,
      profit: pProfit.checked,
      scanner: true
    }
  });

  localStorage.setItem("users", JSON.stringify(users));
  render();
  userForm.reset();
});

/* ===============================
RENDER USER LIST
================================ */
function render() {
  list.innerHTML = "";
  users.filter(u => u.role === "user").forEach(u => {
    list.innerHTML += `
      <tr>
        <td>${u.username}</td>
        <td>${u.businessId}</td>
        <td>${Object.keys(u.permissions).filter(p => u.permissions[p]).join(", ")}</td>
      </tr>
    `;
  });
}

render();


/*
=========================================
ADMIN LICENSE ACTIVATE (ONE TIME)
WHY:
- Software commercial activation
- Monthly subscription enable
=========================================
*/

function activateMonthlyLicense() {
  localStorage.setItem("license", JSON.stringify({
    type: "monthly",
    expire: new Date().setMonth(new Date().getMonth() + 1)
  }));

  alert("Monthly License Activated!");
}

