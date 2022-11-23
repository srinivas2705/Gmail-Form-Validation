let inputs = document.querySelectorAll("input");
let cardPage = document.querySelector("#card");
let createGmail = document.querySelector("#createGmail");
let warn = [
  "Enter first name",
  "Enter last name",
  "choose a gmail address",
  "Enter a password",
  "Confirm password",
];
let span = document.querySelectorAll("span");
const next = document.querySelector("#proceed h6");

let password = inputs[3];
let confirm_password = inputs[4];
let tick = inputs[5];

next.addEventListener("click", () => {
  inputs.forEach((e, i) => {
    if (e.value == "") {
      span[
        i
      ].innerHTML = ` <ion-icon name="alert-circle-sharp"></ion-icon> ${warn[i]}`;
    } else {
      span[i].innerHTML = "";
    }
    if (password.value != "" && password.value == confirm_password.value) {
      span[3].innerHTML = "Password Matched";
      span[3].style.color = "lightgreen";
      span[3].style.fontWeight = "bold";
    } else {
      if (password.value != "") {
        span[3].innerHTML = "Password not Matched";
      }
    }
  });
  toCard();

  if (toCard() && span[3].innerText == "Password Matched") {
    createGmail.style.display = "none";
    cardPage.style.display = "flex";
  }
  showData();
});

function showData() {
  let name = document.querySelector("#card h2");
  let email = document.querySelectorAll("#card ul li");
  let fname = inputs[0].value;
  let lname = inputs[1].value;

  name.innerHTML = `${fname} ${lname}`;
  email[0].innerHTML = `<ion-icon name="mail-unread"></ion-icon> ${inputs[2].value}`;
}

function toCard() {
  inputs.length = 4;
  for (let check of inputs) {
    if (check.value == "") return false;
  }
  return true;
}

tick.addEventListener("click", () => {
  if (password.getAttribute("type") == "text") {
    password.setAttribute("type", "password");
    confirm_password.setAttribute("type", "password");
  } else {
    password.setAttribute("type", "text");
    confirm_password.setAttribute("type", "text");
  }
});

//DARK MODE
const button = document.querySelector("button");
const html = document.querySelector("html");
button.addEventListener("click", () => {
  html.style.colorScheme == "dark" && light();

  html.style.colorScheme = "dark";
  button.innerHTML = '<ion-icon name="sunny-sharp"></ion-icon>';
  button.style.color = "white";
});

const light = () => {
  window.location.reload();
};
