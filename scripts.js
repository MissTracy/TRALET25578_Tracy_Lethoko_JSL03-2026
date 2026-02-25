const initialTasks = [


  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },

  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },

  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },

];

console.log (initialTasks);
// ======================================================================
// ======================================================================

//variables for user/task1 input

const userTask = prompt("Enter task 1 title: ") || "";
const userTaskDesc = prompt("Enter task description: ") || "";
const invalidStatus =
  "Invalid status. Please enter 'todo', 'doing', or 'done'.";

let tasktStatusPrompt = (prompt(
  "please enter task status: 'todo', 'doing', or 'done'."
) || "").toLocaleLowerCase();

//loop for task1

while (userTask.length > 1 && userTaskDesc.length > 1) {
  if (
    tasktStatusPrompt !== "todo" &&
    tasktStatusPrompt !== "doing" &&
    tasktStatusPrompt !== "done"
  ) {
    tasktStatusPrompt = (prompt(invalidStatus) || "").toLocaleLowerCase();
  } else if (tasktStatusPrompt === "todo" || tasktStatusPrompt === "doing") {
    console.log("No tasks completed, let's get to work!");
    break; 
  } else if (tasktStatusPrompt === "done") {
    console.log("Title: " + userTask + ", status: done");
    break; 
  }
  // else{
    
  //  initialTasks.unshift (userTask)
    
  // }

}

const newTask = {
  id: initialTasks.length + 1,
  title: userTask,
  description: userTaskDesc,
  status: tasktStatusPrompt,
};

initialTasks.unshift(newTask);
console.log(initialTasks);


// ======================================================================
// ======================================================================

//variables for user/task2 input

const userTask2 = prompt("Enter task 2 title: ") || "";
const userTaskDesc2 = prompt("Enter task 2 description: ") || "";

let tasktStatusPrompt2 = (prompt(
  "please enter task 2 status: 'todo', 'doing', or 'done'."
) || "").toLocaleLowerCase();

//loop for task2

while (userTask2.length > 1 && userTaskDesc2.length > 1) {
  if (
    tasktStatusPrompt2 !== "todo" &&
    tasktStatusPrompt2 !== "doing" &&
    tasktStatusPrompt2 !== "done"
  ) {
    tasktStatusPrompt2 = (prompt(invalidStatus) || "").toLocaleLowerCase();
  } else if (tasktStatusPrompt2 === "todo" || tasktStatusPrompt2 === "doing") {
    console.log("No tasks completed, let's get to work!");
    break;
  } else if (tasktStatusPrompt2 === "done") {
    console.log("Title: " + userTask2 + ", status: done");
    break; 
  }
}

// ======================================================================
// ======================================================================


//task3
const userTask3 = prompt("Enter task 3 title: ") || "";
const userTaskDesc3 = prompt("Enter task 3 description: ") || "";

let tasktStatusPrompt3 = (prompt(
  "please enter task 3 status: 'todo', 'doing', or 'done'."
) || "").toLocaleLowerCase();

//loop for task3

while (userTask3.length > 1 && userTaskDesc2.length > 1) {
  if (
    tasktStatusPrompt3 !== "todo" &&
    tasktStatusPrompt3 !== "doing" &&
    tasktStatusPrompt3 !== "done"
  ) {
    tasktStatusPrompt3 = (prompt(invalidStatus) || "").toLocaleLowerCase();
  } else if (tasktStatusPrompt3 === "todo" || tasktStatusPrompt3 === "doing") {
    console.log("No tasks completed, let's get to work!");
    break;
  } else if (tasktStatusPrompt3 === "done") {
    console.log("Title: " + userTask3 + ", status: done");
    break; 
  }
}