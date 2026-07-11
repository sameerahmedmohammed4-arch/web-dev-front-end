let btn = document.querySelector("#btn");
let copybtn = document.querySelector("#copy"); 
function pass(){
  let characters =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
//   console.log(characters.length);
    let password = "";
  for (let i =0; i<11; i++){
      let randChar = Math.floor(Math.random() * characters.length); // 69
      password += characters[randChar];
    //   
    }
    
    document.querySelector("#password").value = password;
    // alert("Password Generated Successfully");

}
btn.addEventListener("click", pass);

//copy

function copyPassword(){
    let copyText = document.querySelector("#password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copybtn.innerText = "Copied to clipboard"
  copybtn.disabled = true;
    // alert("Copied the password: " + copyText.value);
  }
copybtn.addEventListener("click", copyPassword);

