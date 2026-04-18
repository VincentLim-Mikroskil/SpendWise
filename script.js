function addExpense() {
  let expense = document.getElementById("expense").value;

  let li = document.createElement("li");
  li.innerText = expense;

  document.getElementById("list").appendChild(li);

  document.getElementById("expense").value = "";
}