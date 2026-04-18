function addExpense() {
  let input = document.getElementById("expense");
  let expense = input.value.trim();

  if (expense === "") {
    alert("Tidak boleh kosong!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = expense + " ";
}