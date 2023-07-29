"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

function closemodal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

function openmodal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openmodal);
}
overlay.addEventListener("click", closemodal);
btnCloseModal.addEventListener("click", closemodal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closemodal();
    }
  }
});
