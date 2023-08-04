window.addEventListener("load", solve);

function solve() {
  const tasks = {};
  const inputFields = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
    label: document.querySelector("#label"),
    points: document.querySelector("#points"),
    assignee: document.querySelector("#assignee"),
  };

  const selectors = {
    createBtn: document.querySelector("#create-task-btn"),
    deleteBtn: document.querySelector("#delete-task-btn"),
    taskSection: document.querySelector("#tasks-section"),
    totalPoints: document.querySelector("#total-sprint-points"),
    hiddenTaskId: document.querySelector("#task-id"),
  };

  const icons = {
    Feature: "&#8865;",
    "Low Priority Bug": "&#9737;",
    "High Priority Bug": "&#9888;",
  };

  const labelClass = {
    Feature: "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority",
  };

  selectors.createBtn.addEventListener("click", createTask);
  selectors.deleteBtn.addEventListener("click", deleteTask);

  function createTask(e) {
    if (Object.values(inputFields).some((s) => s.value === "")) {
      return;
    }

    const task = {
      id: `task-${Object.values(tasks).length + 1}`,
      title: inputFields.title.value,
      description: inputFields.description.value,
      label: inputFields.label.value,
      points: Number(inputFields.points.value),
      assignee: inputFields.assignee.value,
    };

    tasks[task.id] = task;
    const article = createElement("artiicle", ["task-card"], null, task.id);
    createElement(
      "div",
      ["task-card-label", labelClass[task.label]],
      `${task.label} ${icons[task.label]}`,
      null,
      article,
      true
    );
    createElement("h3", ["task-card-title"], task.title, null, article);
    createElement(
      "p",
      ["task-card-description"],
      task.description,
      null,
      article
    );
    createElement(
      "div",
      ["task-card-points"],
      `Estimated at ${task.points} pts`,
      null,
      article
    );
    createElement(
      "div",
      ["task-card-assignee"],
      `Assigned to: ${task.assignee}`,
      null,
      article
    );

    const taskAction = createElement(
      "div",
      ["task-card-actions"],
      null,
      null,
      article
    );
    const deleteBtn = createElement("button", [], "Delete", null, taskAction);
    deleteBtn.addEventListener("click", loadConfirmDelete);

    selectors.taskSection.appendChild(article);

    calculateTotalPoints();

    Object.values(inputFields).forEach((field) => (field.value = ""));
  }

  function createElement(type, classes, txtContent, id, parent, innerHtml) {
    const element = document.createElement(type);

    if (innerHtml && txtContent) {
      element.innerHTML = txtContent;
    } else if (txtContent) {
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

  function loadConfirmDelete(e) {
    const taskId =
      e.currentTarget.parentElement.parentElement.getAttribute("id");

    Object.keys(inputFields).forEach((key) => {
      const selector = inputFields[key];
      selector.value = tasks[taskId][key];
      selector.disabled = true;
    });

    selectors.hiddenTaskId.value = taskId;
    selectors.createBtn.disabled = true;
    selectors.deleteBtn.disabled = false;
  }

  function deleteTask() {
    const taskId = selectors.hiddenTaskId.value;
    console.log(taskId);
    const taskEl = document.querySelector(`#${taskId}`);
    console.log(taskEl);
    taskEl.remove();
    delete tasks[taskId];

    Object.values(inputFields).forEach((selector) => {
      selector.value = "";
      selector.disabled = false;
    });

    selectors.createBtn.disabled = false;
    selectors.deleteBtn.disabled = true;

    calculateTotalPoints();
  }

  function calculateTotalPoints() {
    const totalPts = Object.values(tasks).reduce(
      (acc, curr) => acc + curr.points,
      0
    );

    selectors.totalPoints.textContent = `Total Points ${totalPts}pts`;
  }
}
