function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const error = document.getElementById("error");

  // Simulación de usuarios
  const admin = { user: "admin", pass: "1234" };
  const atUser = { user: "atencion", pass: "1234" };

  if (user === admin.user && pass === admin.pass) {
    window.location.href = "panel_admin.html";
    return;
  }

  if (user === atUser.user && pass === atUser.pass) {
    window.location.href = "panel_atencion.html";
    return;
  }

  error.textContent = "Usuario o contraseña incorrectos.";
}
