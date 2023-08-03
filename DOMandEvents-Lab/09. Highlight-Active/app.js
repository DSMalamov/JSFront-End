function focused() {
  const elements = Array.from(document.querySelectorAll("input"));
  console.log(elements);

  elements.forEach((element) => {
    element.addEventListener("focus", (e) => {
      e.target.parentElement.className = "focused";
    });
    element.addEventListener("blur", (e) => {
      e.target.parentElement.className = "";
    });
  });
}
