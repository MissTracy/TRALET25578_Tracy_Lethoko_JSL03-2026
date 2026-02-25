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

//logs all tasks to console
console.log ("All tasks: " , initialTasks);


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

////loop for task 1 requesting user to enter task status and detials
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

//adds task 1 to array
const newTask = {
  id: initialTasks.length + 1,
  title: userTask,
  description: userTaskDesc,
  status: tasktStatusPrompt,
};
initialTasks.push(newTask);
// console.log(initialTasks);


// ======================================================================
// ======================================================================

//variables for usertask 2 input
const userTask2 = prompt("Enter task 2 title: ") || "";
const userTaskDesc2 = prompt("Enter task 2 description: ") || "";

let tasktStatusPrompt2 = (prompt(
  "please enter task 2 status: 'todo', 'doing', or 'done'."
) || "").toLocaleLowerCase();

////loop for task2 requesting user to enter task status and detials
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

//adds task 2 to array
const newTask2 = {
  id: initialTasks.length + 1,
  title: userTask2,
  description: userTaskDesc2,
  status: tasktStatusPrompt2,
};
initialTasks.push(newTask2);

// ======================================================================
// ======================================================================


//task 3 variables
const userTask3 = prompt("Enter task 3 title: ") || "";
const userTaskDesc3 = prompt("Enter task 3 description: ") || "";

let tasktStatusPrompt3 = (prompt(
  "please enter task 3 status: 'todo', 'doing', or 'done'."
) || "").toLocaleLowerCase();

////loop for task3 requesting user to enter task status and detials
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
    alert("There are enough tasks on your board, please check them in the console.")
    console.log("Title: " + userTask3 + ", status: done");
    break;
  }
}

//adds last task to array
const newTask3 = {
  id: initialTasks.length + 1,
  title: userTask3,
  description: userTaskDesc3,
  status: tasktStatusPrompt
};
initialTasks.push(newTask3);

// ======================================================================
// ======================================================================


//added filter to log done tasks

// const adults = ages.filter((age) => age >= 18);
const doneItems = initialTasks.filter(
  (task) => task.status === "done"
);
console.log("Completed tasks: " , doneItems);