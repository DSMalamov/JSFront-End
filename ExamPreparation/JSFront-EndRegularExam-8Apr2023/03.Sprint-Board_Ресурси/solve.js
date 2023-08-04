// TODO:
const taskSections = {
  ToDo: document.querySelector("#todo-section .task-list"),
  "In Progress": document.querySelector("#in-progress-section .task-list"),
  "Code Review": document.querySelector("#code-review-section .task-list"),
  Done: document.querySelector("#done-section .task-list"),
};

const inputs = {
  title: document.querySelector("#title"),
  description: document.querySelector("#description"),
};

const moveToNext = {
  ToDo: "In Progress",
  "In Progress": "Code Review",
  "Code Review": "Done",
  Done: "Close",
};

const buttonText = {
  ToDo: "Move to In Progress",
  "In Progress": "Move to Code Review",
  "Code Review": "Move to Done",
  Done: "Close",
};

function attachEvents() {
  document
    .querySelector("#load-board-btn")
    .addEventListener("click", loadTasks);

  document
    .querySelector("#create-task-btn")
    .addEventListener("click", createTask);
}

const API_URL = "http://localhost:3030/jsonstore/tasks/";
let tasks = {};

async function loadTasks() {
  tasks = await (await fetch(API_URL)).json();

  Object.values(taskSections).forEach((section) => (section.textContent = ""));

  Object.values(tasks).forEach((task) => {
    const section = taskSections[task.status];
    const item = createElement("li", ["task"], null, null, section);
    createElement("h3", [], task.title, null, item);
    createElement("p", [], task.description, null, item);
    const button = createElement(
      "button",
      [],
      buttonText[task.status],
      task._id,
      item
    );
    button.addEventListener("click", moveTask);
  });
}

async function createTask() {
  if (Object.values(inputs).some((input) => input.value === "")) {
    return;
  }

  const currTask = {
    title: inputs.title.value,
    description: inputs.description.value,
    status: "ToDo",
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(currTask),
  }).then(() => {
    loadTasks();
    inputs.title.value = "";
    inputs.description.value = "";
  });
}

async function moveTask(e) {
  const task = tasks[e.currentTarget.getAttribute("id")];
  let method = "PATCH";
  let body = JSON.stringify({
    ...task,
    status: moveToNext[task.status],
  });

  if (task.status === "Done") {
    method = "DELETE";
    body = undefined;
  }

  fetch(`${API_URL}/${task._id}`, {
    method,
    body,
  }).then(() => {
    loadTasks();
  });
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

attachEvents();
