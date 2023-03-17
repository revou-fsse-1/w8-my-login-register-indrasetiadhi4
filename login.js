/* 
  -----------------------------------------------------------------------------
    Verifying Email & Password
  -----------------------------------------------------------------------------
*/

var getUser = localStorage.getItem("users");
var users = JSON.parse(getUser) || [
  { email: "admin@gmail.com", password: "Admin123" },
];

// Verify Login
function verifyLogin(e) {
  e.preventDefault();

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  const checkEmail = users.some((e) => e.email === email);
  if (!checkEmail) {
    alert("Email not found");
    return;
  }

  const user = users.find((e) => e.email === email);
  const checkPassword = password === user.password;
  if (!checkPassword) {
    alert("Incorrect Password");
    return;
  }

  window.location.href = "/manage";
}
