var link = document.querySelector(".address-button");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close-button");
var form = modal.querySelector("form");
var email = modal.querySelector("[name=email]");
var comment = modal.querySelector("[name=comment]");
var storage = localStorage.getItem("email");
link.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.add("modal-show");
  var name = modal.querySelector("[name=name]");
  if (storage) {
    email.value = storage;
  }
  name.focus();
});
close.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.remove("modal-show");
});
form.addEventListener("submit", function(e) {
  if (!name.value || !email.value) {
    e.preventDefault();
    console.log("Нужно заполнить");
  } else {
    localStorage.setItem("email", email.value);
  }
});
