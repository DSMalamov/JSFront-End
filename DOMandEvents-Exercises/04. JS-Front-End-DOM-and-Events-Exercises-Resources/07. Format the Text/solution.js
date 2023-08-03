function solve() {
  const text = document.querySelector("#input").value.split(".");
  text.pop();

  const result = document.querySelector("#output");

  while (text.length > 0) {
    const content = document.createElement("p");
    content.textContent = text
      .splice(0, 3)
      .map((t) => t.trim())
      .map((t) => t + ".")
      .join("");

    result.appendChild(content);
  }
}
