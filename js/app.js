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

document.getElementById("add-item-btn").addEventListener("click", function () {
  //get all the items input value
  const nameInputValue = getInputValueById("name-input");
  const priceInputValue = getInputValueById("price-input");
  const qtyInputValue = getInputValueById("qty-input");

  //set the data in the table
  const tableBody = document.getElementById("table-body");

  const tr = document.createElement("tr");
  tr.innerHTML = `
<th scope="row">${nameInputValue}</th>
<td>${priceInputValue}</td>
<td>${qtyInputValue}</td>
<td>@mdo</td>
`;
  tableBody.appendChild(tr);
  console.log(nameInputValue, priceInputValue, qtyInputValue);
});
