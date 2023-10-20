function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/giovanne-light.png");
    img.setAttribute(
      "alt",
      "Foto de Giovanne de Luna utilizando uma roupa laranja fazendo um joinha!."
    );
  } else {
    img.setAttribute("src", "assets/giovane-profile.png");
    img.setAttribute(
      "alt",
      "Foto de Giovanne de Luna utilizando um moletom preto."
    );
  }
}
function inProgress() {
  window.alert("Portfólio In Progress");
}
