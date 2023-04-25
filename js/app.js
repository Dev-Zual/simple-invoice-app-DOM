function getInputValueById(id) {
  const inputField = document.getElementById(id);
  return inputField.value;
}

function clearInput(id) {
  const inputField = document.getElementById(id);
  inputField.value = "";
}

function calculateSubTotal(id) {
  const totals = document.getElementsByClassName(id);
  let subTotal = 0;
  for (const total of totals) {
    const price = Number(total.innerText);
    subTotal += price;
  }
  return subTotal;
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

  const priceInputNumber = Number(priceInputValue);
  const qtyInputNumber = Number(qtyInputValue);
  const totalPrice = priceInputNumber * qtyInputNumber;

  //set the data in the table
  const tableBody = document.getElementById("table-body");

  const tr = document.createElement("tr");
  tr.innerHTML = `
<th scope="row">${nameInputValue}</th>
<td>${priceInputValue}</td>
<td>${qtyInputValue}</td>
<td class="item-total">${totalPrice}</td>
`;
  tableBody.appendChild(tr);

  const subTotal = calculateSubTotal("item-total");
  console.log(subTotal);
  const subTotalField = document.getElementById("sub-total");
  subTotalField.innerText = subTotal;

  const tax = (2 / 100) * subTotal;
  //set tax
  const taxField = document.getElementById("tax");
  taxField.innerText = tax;

  //calculate grand total
  const grandTotal = subTotal + tax;
  const grandTotalField = document.getElementById("grand-total");
  grandTotalField.innerText = grandTotal;
  console.log(tax);

  //function for clear all input
  clearInput("name-input");
  clearInput("price-input");
  clearInput("qty-input");
});
