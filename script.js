document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("expense-form");
    const amountInput = document.getElementById("amount");
    const descriptionInput = document.getElementById("description");
    const categorySelect = document.getElementById("categary");
    const expenseList = document.getElementById("expense-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const amount = amountInput.value;
        const description = descriptionInput.value;
        const category = categorySelect.value; // Get selected category

        if (amount && description && category) {
            const expense = {
                amount,
                description,
                category
            };

            saveExpense(expense);
            displayExpenses();
            clearInputs();
        }
    });

    function saveExpense(expense) {
        const expenses = getExpensesFromStorage() || [];
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function getExpensesFromStorage() {
        return JSON.parse(localStorage.getItem("expenses"));
    }

    function saveExpensesToStorage(expenses) {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function displayExpenses() {
        expenseList.innerHTML = "";

        const expenses = getExpensesFromStorage();

        if (expenses && expenses.length > 0) {
            expenses.forEach(function (expense, index) {
                const expenseItem = document.createElement("div");
                expenseItem.classList.add("expense-item");
                expenseItem.innerHTML = `
                    <span class="amount">$${expense.amount}</span> - ${expense.description} (Category: ${expense.category})
                    <div class="expense-buttons">
                        <button class="edit-btn" data-index="${index}">Edit</button>
                        <button class="delete-btn" data-index="${index}">Delete</button>
                    </div>
                `;

                expenseList.appendChild(expenseItem);
            });

            addEditDeleteEventListeners(expenses);
        } else {
            const noExpenseMessage = document.createElement("p");
            noExpenseMessage.textContent = "No expenses recorded.";
            expenseList.appendChild(noExpenseMessage);
        }
    }

    function addEditDeleteEventListeners(expenses) {
        const editButtons = document.querySelectorAll(".edit-btn");
        const deleteButtons = document.querySelectorAll(".delete-btn");

        editButtons.forEach(function (editButton) {
            editButton.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                editExpense(expenses, index);
            });
        });

        deleteButtons.forEach(function (deleteButton) {
            deleteButton.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                deleteExpense(expenses, index);
            });
        });
    }

    function editExpense(expenses, index) {
        const editedAmount = prompt("Enter edited amount:", expenses[index].amount);
        const editedDescription = prompt("Enter edited description:", expenses[index].description);

        if (editedAmount && editedDescription) {
            expenses[index].amount = editedAmount;
            expenses[index].description = editedDescription;

            saveExpensesToStorage(expenses);
            displayExpenses();
        }
    }

    function deleteExpense(expenses, index) {
        if (confirm("Are you sure you want to delete this expense?")) {
            expenses.splice(index, 1);
            saveExpensesToStorage(expenses);
            displayExpenses();
        }
    }

    function clearInputs() {
        amountInput.value = "";
        descriptionInput.value = "";
    }

    // Initial display of stored expenses
    displayExpenses();
});