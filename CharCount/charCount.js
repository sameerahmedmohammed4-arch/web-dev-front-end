

let characters = document.querySelector("textarea");
let count = document.querySelector("#count")
console.log(count.innerHTML);

function countChar() {
 count.innerText = characters.value.length;
 const text = characters.value.trim();

    if (text === '') {
      count.textContent = 0;
      return;
    }
    if (characters.value.length > 20) {
        characters.style.color = "red";
        count.style.color = "red";
        
    }else if(characters.value.length <= 20){
        characters.style.color = "blue";
        count.style.color = "green";
    }
    console.log(characters.value);
}


characters.addEventListener("input",countChar);


