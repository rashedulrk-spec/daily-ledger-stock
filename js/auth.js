/*
================================================
FILE: js/auth.js
WHY THIS FILE EXISTS:
- Login verify করা
- User কে session এ রাখা
- Role অনুযায়ী page redirect করা
================================================
*/

/*
DEFAULT ADMIN CREATE
WHY:
- প্রথমবার project run করলে যেন admin থাকে
*/
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([
    {
      username: "admin",
      password: "1234",
      role: "admin",
      permissions: { all: true }
    }
  ]));
}

/*
LOGIN FORM SUBMIT
WHY:
- username/password check
*/
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const u = username.value.trim();
  const p = password.value.trim();
  const r = role.value;

  const users = JSON.parse(localStorage.getItem("users"));

  /*
  USER VERIFY
  */
  const user = users.find(x =>
    x.username === u &&
    x.password === p &&
    x.role === r
  );

  if (!user) {
    msg.innerText = "❌ Invalid login";
    return;
  }

  /*
  SESSION SAVE
  WHY:
  - Login user কে মনে রাখার জন্য
  */
  localStorage.setItem("session", JSON.stringify(user));

  /*
  REDIRECT
  */
  location.href = r === "admin"
    ? "admin.html"
    : "user.html";
});
