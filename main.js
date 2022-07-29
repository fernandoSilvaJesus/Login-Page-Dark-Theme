const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const validade = document.querySelectorAll("input");

const abrirModal = (event) => {
  event.preventDefault();

  const usuario = validade[0].value.length;
  const password = validade[1].value.length;

  modal.style.display = "block";
  modal.classList.add("animation-modal");

  if (usuario >= 6 || password >= 6) {
    setInterval(() => {
      modal.style.display = "none";
      modal.classList.remove("animation-modal");
    }, 5000);
  }
};
form.addEventListener("submit", abrirModal);
