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
