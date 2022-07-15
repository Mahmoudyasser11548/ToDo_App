let tasksDiv = document.querySelector(".tasks");
let input = document.querySelector("input");
let statDiv = document.querySelector(".statistics");

// Theme Convert
let theme = document.querySelector(".title button");

let imgTheme = document.createElement('img');
imgTheme.src = 'images/icon-moon.svg';
theme.append(imgTheme);

function themeConvert() {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")) {
    imgTheme.src = 'images/icon-sun.svg';
  } else {
    imgTheme.src = 'images/icon-moon.svg';
  }
}
// Theme Convert


// Get Data From Local Storage
let arrayOftasks = [];

if(window.localStorage.getItem("tasks")) {
  arrayOftasks = JSON.parse(window.localStorage.getItem("tasks"));
}

getFromStorage();
// Get Data From Local Storage

// Add & Delete Task 
statDiv.addEventListener("click", (e) => {
  if(e.target.classList.contains("clear")) {
    let taskComplete = document.querySelectorAll(".task.done");
    arrayOftasks = arrayOftasks.filter((taskData) => taskData.finish === false);
    for(let i = 0;i < taskComplete.length;i++) {
      taskComplete[i].remove();
    }
    setInStorage(arrayOftasks);
  }
});

tasksDiv.addEventListener("click", (e) => {
  if(e.target.classList.contains("del")) {
    arrayOftasks = arrayOftasks.filter((taskData) => taskData.id != e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
    setInStorage(arrayOftasks);
  }

  if(e.target.classList.contains("task")) {
    e.target.classList.toggle("done");
    for(let i = 0;i < arrayOftasks.length;i++) {
      if(arrayOftasks[i].id == e.target.getAttribute("data-id"))
        arrayOftasks[i].finish == false ? arrayOftasks[i].finish = true : arrayOftasks[i].finish = false;
    }
    setInStorage(arrayOftasks);
  }
});
// Add & Delete Task 

input.onblur = () => {
  if(input.value !== "") {
    addTask(input.value);
    input.value = "";
  }
};

function addTask(taskText) {
  const taskData = {
    id: Date.now(),
    title: taskText,
    finish: false
  };

  arrayOftasks.push(taskData);
  addElement(arrayOftasks);
  setInStorage(arrayOftasks);
}

// Create Task
function addElement(arrayOftasks) {
  tasksDiv.innerHTML = "";

  arrayOftasks.forEach(taskData => {
    // Div Task
    let task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("data-id", taskData.id);
    tasksDiv.prepend(task);
    // Icon Before title
    let icon = document.createElement("div");
    icon.classList.add("icon");
    task.prepend(icon);
    // title
    let textP = document.createElement("p");
    textP.appendChild(document.createTextNode(taskData.title));
    task.append(textP);
    // add class Done
    if(taskData.finish) {
      task.className = "task done";
    }
    // button Delete task
    let del = document.createElement("img");
    del.src = "images/icon-cross.svg";
    del.className = "del";
    task.append(del);
  });
}
// Create Task

// Set Data in Local Stroage
function setInStorage(arrayOftasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOftasks));
}
// Set Data in Local Stroage

// get Data in Local Stroage
function getFromStorage() {
  let data = window.localStorage.getItem("tasks");
  if(data) {
    let tasks = JSON.parse(data);
    addElement(arrayOftasks);
  }
}
// get Data in Local Stroage
