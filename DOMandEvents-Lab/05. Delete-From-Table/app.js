function deleteByEmail() {
  const email = document.querySelector('input[name="email"]').value;
  const emaliBoxes = Array.from(
    document.querySelectorAll("td:nth-child(even)")
  );

  const userrEBox = emaliBoxes.find((e) => e.textContent === email);
  const result = document.querySelector("#result");

  if (userrEBox) {
    userrEBox.parentElement.remove();
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
