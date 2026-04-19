let balance = 0;

function addTransaction() {
  const text = document.getElementById("text").value;
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (text === "" || amount === 0) {
    alert("Please enter valid data");
    return;
  }

  // 👉 Balance logic
  if (type === "income") {
    balance += amount;
  } else {
    balance -= amount;
  }

  document.getElementById("balance").innerText = balance;

  // 👉 List item
  const li = document.createElement("li");

  if (type === "income") {
    li.innerText = text + " : +₹ " + amount;
    li.style.color = "#00ffcc";
  } else {
    li.innerText = text + " : -₹ " + amount;
    li.style.color = "#ffcc00";
  }

  document.getElementById("list").appendChild(li);

  // 👉 clear inputs
  document.getElementById("text").value = "";
  document.getElementById("amount").value = "";
}