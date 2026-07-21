let name = document.querySelector("#expenseName")
let amount = document.querySelector("#amount")
let category = document.querySelector("#category")
let date = document.querySelector("#date")
let btn = document.querySelector("#btn");
const tableBody = document.querySelector("#expenseList");

let expenses = [];
function userInput() {
    const expenseName = name.value;
    const expenseAmount = amount.value;
    const expenseCategory = category.value;
    const expenseDate = date.value;
    
    if (expenseName === "" || expenseAmount <= 0 || expenseCategory === "" || expenseDate === ""){
        alert("You missed some of the inputs or are invalid!");
        return
    }
    const expense = {
        name: expenseName,
        amount: expenseAmount,
        category: expenseCategory,
        date: expenseDate
    };
    expenses.push(expense);
    
    display();

    name.value = "";
    amount.value = "";
    category.value = "";
    date.value = "";
}

let totalExpenses = document.querySelector("#totalExpenses");
let totalIncome =document.querySelector("#totalIncome");
let balance = document.querySelector("#balance");

function display() {
    let salary = 0;
    let spending = 0;
       tableBody.innerHTML = "";
    expenses.forEach(expense => {
        if (expense.category === "Income") {
            salary += Number(expense.amount);
            }    else {
            spending += Number(expense.amount);
            // totalExpenses.innerHTML =   spending;
        };
        totalIncome.innerHTML = salary;
        totalExpenses.innerHTML =  spending;
    });
    totalIncome.innerHTML =   salary;
    let bal = salary - spending;
    balance.innerHTML = bal;
    

expenses.forEach(expense => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.category}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
    `;
    tableBody.appendChild(row);
});


}

btn.addEventListener("click", userInput);