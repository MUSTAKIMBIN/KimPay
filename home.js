document.getElementById("addMoney").addEventListener("click", function (e) {
  e.preventDefault();
  let totalMoney = document.getElementById("total-balance").innerText;
  let convertedTotalMoney = parseInt(totalMoney);
  let amountToAdd = document.getElementById("amountToAdd").value;
  let convertedAmountToAdd = parseInt(amountToAdd);
  let grandTotalMoney = convertedTotalMoney + convertedAmountToAdd;
  document.getElementById("total-balance").innerText = grandTotalMoney;
  //   console.log(grandTotalMoney);
});

// togolling feature

document.getElementById("add-money-div").addEventListener("click", function () {
  document.getElementById("cashOut-from").style.display = "none";
  document.getElementById("add-money-form").style.display = "block";
});
document.getElementById("cashOut-div").addEventListener("click", function () {
  document.getElementById("cashOut-from").style.display = "block";
  document.getElementById("add-money-form").style.display = "none";
});

// cash out feature
document.getElementById("cashOut").addEventListener("click", function (e) {
  e.preventDefault();
  const amountToOut = parseInt(document.getElementById("cashOutAmount").value);
  let totalMoney = parseInt(document.getElementById("total-balance").innerText);
  const grandMoney = totalMoney - amountToOut;
  document.getElementById("total-balance").innerText = grandMoney;
});
