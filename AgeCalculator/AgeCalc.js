

const userDate = document.getElementById("dob");
const btn = document.getElementById("calculate");
const result = document.getElementById("result");

// userDate.addEventListener("input", () => {
//     btn.disabled = !userDate.value;
//     if (!userDate.value) {
//         result.textContent = "Your age: —";
//     }
// });


function showAge() {
    // if (!userDate.value) {
    //     result.textContent = "Please select a valid date of birth.";
    //     return;
    // }

    const birthDate = new Date(userDate.value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    if (birthDate > today) {
        result.textContent = "Date of birth cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear(); // 22
    let month = today.getMonth() - birthDate.getMonth(); // 6-7= -1
    let day = today.getDate() - birthDate.getDate(); // 8-12 = -4 --> 26
    //dob 12 august(7) 2004

    if (day < 0) { 
        month -= 1; //-2
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); // (2026,06,0)
        day += previousMonth.getDate(); //26
    }

    if (month < 0) { // -1
        age -= 1; // 21
        month += 12; //11
    }

    result.textContent = `Your age is ${age} year(s), ${month} month(s) and ${day} day(s).`;

}



btn.addEventListener("click", showAge);
