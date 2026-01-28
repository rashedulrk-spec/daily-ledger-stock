/*
=================================================
LICENSE KEY GENERATOR (ADMIN ONLY)
WHY:
- Commercial license selling
- Unique key per customer
=================================================
*/

function generateKey() {
  const part = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  return `AITEC-${part()}-${part()}-${part()}`;
}

function createLicense(months = 1) {
  const key = generateKey();

  const license = {
    key,
    type: "monthly",
    expire: new Date().setMonth(new Date().getMonth() + months),
    active: false
  };

  localStorage.setItem("license_master_" + key, JSON.stringify(license));

  alert("License Key Generated:\n" + key);
}
