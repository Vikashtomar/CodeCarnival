// Get elements
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseCategorySelect = document.getElementById("expenseCategory");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseTable = document.getElementById("expenseTable").getElementsByTagName("tbody")[0];
const totalAmountElem = document.getElementById("totalAmount");

// Array to store expenses
let expenses = [];

// Function to update the expense table
function updateExpenseTable() {
  // Clear the table before re-rendering
  expenseTable.innerHTML = "";
  let totalAmount = 0;
  
  // Populate the table with expenses
  expenses.forEach((expense, index) => {
    const row = expenseTable.insertRow();
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.category}</td>
      <td>$${expense.amount}</td>
      <td><button onclick="removeExpense(${index})">Delete</button></td>
    `;
    
    // Update total amount
    totalAmount += expense.amount;
  });
  
  // Update total amount in the DOM
  totalAmountElem.textContent = totalAmount;
}

// Function to add a new expense
function addExpense() {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());
  const category = expenseCategorySelect.value;
  
  // Validation for inputs
  if (name && !isNaN(amount) && amount > 0) {
    const expense = {
      name,
      amount,
      category
    };
    
    // Add to expenses array
    expenses.push(expense);
    
    // Update table and reset form
    updateExpenseTable();
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  } else {
    alert("Please enter valid expense details.");
  }
}

// Function to remove an expense
function removeExpense(index) {
  expenses.splice(index, 1); // Remove the expense from the array
  updateExpenseTable(); // Re-render the table
}

// Add event listener to the "Add Expense" button
addExpenseBtn.addEventListener("click", addExpense);

// Initialize table with an empty list
updateExpenseTable();
