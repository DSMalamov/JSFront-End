function create(words) {
  const constainer = document.querySelector("#content");

  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = word;
    p.style.display = "none";

    div.appendChild(p);

    div.addEventListener("click", (e) => {
      const invP = e.currentTarget.querySelector("p");
      invP.style.display = "block";
    });

    constainer.appendChild(div);
  });
}
