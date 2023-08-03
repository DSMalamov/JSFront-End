function addItem() {
  const textInp = document.querySelector("#newItemText");
  const valueInp = document.querySelector("#newItemValue");

  const option = document.createElement("option");
  option.textContent = textInp.value;
  option.setAttribute("value", valueInp.value);

  const select = document.querySelector("#menu");
  select.appendChild(option);
  textInp.value = "";
  valueInp.value = "";
}
