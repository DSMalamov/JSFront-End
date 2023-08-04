window.addEventListener("load", solve);

function solve() {
  const publichButton = document
    .querySelector("#publish-btn")
    .addEventListener("click", publish);

  function publish() {
    const title = document.querySelector("#task-title").value;
    const category = document.querySelector("#task-category").value;
    const content = document.querySelector("#task-content").value;

    if (!title || !category || !content) {
      return;
    }

    const container = createElement("li", ["rpost"]);

    const article = createElement("article", [], null, null, container);
    const heading4 = createElement("h4", [], title, null, article);
    const catPar = createElement(
      "p",
      [],
      `Category: ${category}`,
      null,
      article
    );
    const conPar = createElement("p", [], `Content: ${content}`, null, article);
    const editBtn = createElement(
      "button",
      ["action-btn", "edit"],
      "Edit",
      null,
      container
    );
    editBtn.addEventListener("click", edit);
    const postBtn = createElement(
      "button",
      ["action-btn", "post"],
      "Post",
      null,
      container
    );
    postBtn.addEventListener("click", post);

    document.querySelector("#review-list").appendChild(container);

    document.querySelector("#task-title").value = "";
    document.querySelector("#task-category").value = "";
    document.querySelector("#task-content").value = "";

    function edit() {
      document.querySelector("#task-title").value = title;
      document.querySelector("#task-category").value = category;
      document.querySelector("#task-content").value = content;

      container.remove();
    }

    const publishedList = document.querySelector("#published-list");
    function post() {
      editBtn.remove();
      postBtn.remove();
      publishedList.appendChild(container);
    }
  }

  function createElement(type, classes, txtContent, id, parent) {
    const element = document.createElement(type);

    if (txtContent) {
      element.textContent = txtContent;
    }

    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }

    if (id) {
      element.setAttribute("id", id);
    }

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  }
}
