const PASSWORD = "1234";

function login() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    localStorage.setItem("auth", "true");
    showContent();
  } else {
    error.textContent = "Contraseña incorrecta";
  }
}

function showContent() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
}

if (localStorage.getItem("auth") === "true") {
  showContent();
}
