function getInputValueById(id) {
  const inputField = document.getElementById(id);
  return inputField.value;
}

document.getElementById("buyer-button").addEventListener("click", function () {
  const buyerInputValue = getInputValueById("buyer-input");
  console.log(buyerInputValue);
});
