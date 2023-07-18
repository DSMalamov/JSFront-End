function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const cells = Array.from(document.querySelectorAll("tbody td"));

    const content = document.querySelector("#searchField");
    const activerows = Array.from(document.querySelectorAll("tbody tr.select"));

    activerows.forEach((r) => {
      r.classList.remove("select");
    });

    cells.forEach((c) => {
      if (c.textContent.includes(content.value)) {
        c.parentElement.classList.add("select");
      }
    });

    content.value = "";
  }
}
