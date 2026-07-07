
let userDate = document.querySelector("input");
let btn = document.querySelector("button");
let para = document.querySelector("p");

function showAge() {
    let dob = userDate.value;
    let birthDate = new Date(dob)
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth();
    // console.log(age);
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
        // document.querySelector("p").innerText =
        // "Your age is " + age + " years.";
        para.innerText = `Your age is ${age} years`;
    if (birthDate > today) {
    para.innerText = "Date of birth cannot be in the future.";
    return;

    
}
    
}
btn.addEventListener("click", showAge);
