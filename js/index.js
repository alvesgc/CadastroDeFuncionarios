function login() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "admin") {
    window.location.href = "pages/cadFunc.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
login()
