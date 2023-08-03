function solve(array) {
  const row = array.shift();

  let assignees = {};

  for (let index = 0; index < row; index++) {
    let [assignee, taskId, title, status, estimatePoints] = array
      .shift()
      .split(":");

    if (assignees.hasOwnProperty(assignee)) {
      assignees[assignee].push({
        taskId,
        title,
        status,
        estimatePoints: Number(estimatePoints),
      });
    } else {
      assignees[assignee] = [
        {
          taskId,
          title,
          status,
          estimatePoints: Number(estimatePoints),
        },
      ];
    }
  }

  array.forEach((row) => {
    let commandInfo = row.split(":");
    let command = commandInfo.shift();
    let currentAssignee = commandInfo.shift();

    if (command === "Add New") {
      if (!assignees.hasOwnProperty(currentAssignee)) {
        console.log(`Assignee ${currentAssignee} does not exist on the board!`);
      } else {
        let [taskId, title, status, estimatePoints] = commandInfo;

        assignees[currentAssignee].push({
          taskId,
          title,
          status,
          estimatePoints: Number(estimatePoints),
        });
      }
    } else if (command === "Change Status") {
      if (!assignees.hasOwnProperty(currentAssignee)) {
        console.log(`Assignee ${currentAssignee} does not exist on the board!`);
      } else {
        let [taskId, newStatus] = commandInfo;

        assignees[currentAssignee].forEach((task) => {
          if (task.taskId === taskId) {
            task.status = newStatus;
          } else {
            console.log(
              `Task with ID ${taskId} does not exist for ${currentAssignee}!`
            );
          }
        });
      }
    } else if (command === "Remove Task") {
      if (!assignees.hasOwnProperty(currentAssignee)) {
        console.log(`Assignee ${currentAssignee} does not exist on the board!`);
      } else {
        let [index] = commandInfo;
        if (index < 0 || index > assignees[currentAssignee].length - 1) {
          console.log(`Index is out of range!`);
        } else {
          assignees[currentAssignee].splice(index, 1);
        }
      }
    }
  });
  const toDoPoints = sumPoints("ToDo");
  const inProgresPoints = sumPoints("In Progress");
  const codeReviewPoints = sumPoints("Code Review");
  const donePoints = sumPoints("Done");

  console.log(`ToDo: ${toDoPoints}pts`);
  console.log(`In Progress: ${inProgresPoints}pts`);
  console.log(`Code Review: ${codeReviewPoints}pts`);
  console.log(`Done Points: ${donePoints}pts`);

  function sumPoints(status) {
    let points = Object.values(assignees)
      .flat()
      .filter((t) => t.status === status)
      .reduce((acc, curr) => {
        return (acc += curr.estimatePoints);
      }, 0);
    return points;
  }
  if (donePoints >= toDoPoints + inProgresPoints + codeReviewPoints) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
