const spinner = document.querySelector(".main");
const button = document.querySelector("#btn");
const message = document.querySelector("#message");

function loader(){
    spinner.style.display = "block";
    button.textContent = "Loading...";
    button.style.backgroundColor = "transparent";
    button.style.color = "blue";
    setTimeout(() => {
        spinner.style.display = "none";
        button.textContent = "✅🥳";
        button.style.backgroundColor = "black";
        button.style.pointerEvents = "none";
        // button.style.cursor = "not-allowed";
        button.disabled = true;
        message.textContent = "Successfully fetched from API"
    },4000);
    
}

button.addEventListener("click",loader);