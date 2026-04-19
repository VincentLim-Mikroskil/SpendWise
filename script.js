function addExpense() {
  let input = document.getElementById("expense");
  let expense = input.value.trim();

  if (expense === "") {
    alert("Tidak boleh kosong!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = expense + " ";

  // tombol hapus
  let btn = document.createElement("button");
  btn.innerText = "Hapus";

  btn.onclick = function () {
    li.remove(); // ini yang menghapus item
  };

  li.appendChild(btn);
  document.getElementById("list").appendChild(li);

  input.value = "";
}