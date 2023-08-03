function loadRepos() {
  const elem = document.querySelector("#res");
  console.log(elem);
  fetch("https://api.github.com/users/testnakov/repos")
    .then((res) => res.text())
    .then((res) => (elem.textContent = res));
}
