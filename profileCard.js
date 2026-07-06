let btn = document.querySelector("#Follow");



function onClick() {
    btn.innerText = "Following ✔";
    btn.style.backgroundColor = "green";
}
btn.addEventListener('click', onClick);

let toggleBtn = document.querySelector("#toggle");
let profileCard = document.querySelector(".profileCard")

function toggle() {
    document.body.classList.toggle("dark");
    toggleBtn.classList.toggle("dark");
    profileCard.classList.toggle("dark")
}
toggleBtn.addEventListener("click", toggle);