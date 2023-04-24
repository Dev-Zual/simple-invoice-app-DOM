function getInputValueById(id) {
  const inputField = document.getElementById(id);
  return inputField.value;
}

document.getElementById("buyer-button").addEventListener("click", function () {
  const buyerInputValue = getInputValueById("buyer-input");

  const buyerDetails = document.getElementById("buyer-details");
  buyerDetails.innerText = buyerInputValue;
  document.getElementById("buyer-input").value = "";
  console.log(buyerInputValue);
});
