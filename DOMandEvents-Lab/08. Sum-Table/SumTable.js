function sumTable() {
  const elements = Array.from(
    document.querySelectorAll("td:nth-child(2):not(#sum)")
  );
  const total = elements.reduce((acc, curr) => {
    return acc + Number(curr.textContent);
  }, 0);

  const result = document.querySelector("#sum");
  result.textContent = total;
}
