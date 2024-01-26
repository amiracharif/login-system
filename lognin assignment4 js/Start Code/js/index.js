// // ~ >=========|> HTML Elements
// var newTaskBtn = document.getElementById("newTask");
// var modalEl = document.getElementById("modal");
// var statusInput = document.getElementById("status");
// var categoryInput = document.getElementById("category");
// var titleInput = document.getElementById("title");
// var descriptionInput = document.getElementById("description");
// var addBtn = document.getElementById("addBtn");
// var searchInput = document.getElementById("searchInput");



// var containers = {
//   nextUp: document.getElementById("nextUp"),
//   inProgress: document.getElementById("inProgress"),
//   done: document.getElementById("done"),
// };

// var countersEl = {
//   nextUp: document.getElementById("nextUp").querySelector("span"),
//   inProgress: document.getElementById("inProgress").querySelector("span"),
//   done: document.getElementById("done").querySelector("span"),
// };

// // & >=========|> App variables
// var tasksArr = getTasksfromLocal();
// for (var i = 0; i < tasksArr.length; i++) {
//   displayTask(i);
// }

// var counters = {
//   nextUp: 0,
//   inProgress: 0,
//   done: 0,
// };
// // * >=========|> Functions
// function showModal() {
//   window.scroll(0, 0);
//   document.body.style.overflow = "hidden";
//   modalEl.classList.replace("d-none", "d-flex");
// }

// function hideModal() {
//   resetModal();
//   modalEl.classList.replace("d-flex", "d-none");
//   document.body.style.overflow = "auto";
// }

// function resetModal() {
//   clearForm();
//   addBtn.classList.replace("d-none", "d-block");
//   updateBtn.classList.replace("d-block", "d-none");
// }

// function setTasksToLocal() {
//   localStorage.setItem("tasks", JSON.stringify(tasksArr));
// }

// function getTasksfromLocal() {
//   return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// function addTask() {
//   var task = {
//     status: statusInput.value,
//     category: categoryInput.value,
//     title: titleInput.value,
//     description: descriptionInput.value,
//   };

//   tasksArr.push(task);
//   setTasksToLocal();
//   displayTask(tasksArr.length - 1);
//   clearForm();
//   hideModal();
// }

// function displayTask(index) {
//   var taskHTML = `
//   <div class="task" style="background-color: ${tasksArr[index].bgColor}">
//     <h3 class="text-capitalize">${tasksArr[index]?.title}</h3>
//     <p class="description text-capitalize">${tasksArr[index]?.description}</p>
//     <h4 class="category ${tasksArr[index]?.category} text-capitalize">${tasksArr[index]?.category}</h4>
//     <ul class="task-options list-unstyled d-flex gap-3 fs-5 m-0">
//       <li><i class="bi bi-pencil-square" onclick="getTaskInfo(${index})" ></i></li>
//       <li><i class="bi bi-trash-fill" onclick="deleteTask(${index})"></i></li>
//       <li><i class="bi bi-palette-fill" onclick="changeBgColor(event, ${index})"></i></li>
//     </ul>
//   </div>
//   `;

//   containers[tasksArr[index].status].querySelector(".tasks").innerHTML +=
//     taskHTML;
//   increaseCounters(tasksArr[index]?.status);
// }

// function displayAllTasks() {
//   for (var i = 0; i < tasksArr.length; i++) {
//     displayTask(i);
//   }
// }

// function increaseCounters(status) {
//   countersEl[status].innerHTML = +countersEl[status].innerHTML + 1;
// }

// function clearForm() {
//   statusInput.value = "nextUp";
//   categoryInput.value = "education";
//   titleInput.value = "";
//   descriptionInput.value = "";
// }

// function deleteTask(index) {
//   tasksArr.splice(index, 1);
//   setTasksToLocal();
//   resetContainers();
//   resetCounters();
//   displayAllTasks();
// }

// function resetContainers() {
//   for (var key in containers) {
//     containers[key].querySelector(".tasks").innerHTML = "";
//   }
// }

// function resetCounters() {
//   for (var key in countersEl) {
//     countersEl[key].innerHTML = 0;
//   }

//   for (var key in counters) {
//     counters[key] = 0;
//   }
// }

// function searchTasks() {
//   resetContainers();
//   resetCounters();
//   const term = searchInput.value;
//   for (var i = 0; i < tasksArr.length; i++) {
//     if (
//       tasksArr[i].title.toLowerCase().includes(term.toLowerCase()) ||
//       tasksArr[i].category.toLowerCase().includes(term.toLowerCase())
//     ) {
//       displayTask(i);
//     }
//   }
// }

// // ^ >=========|> Events
// // !### Show Modal on clicking on new Task Button
// newTaskBtn.addEventListener("click", showModal);

// // !### Hide Modal in 2 different ways
// modalEl.addEventListener("click", function (event) {
//   if (event.target === event.currentTarget) {
//     hideModal();
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Escape") {
//     hideModal();
//   }
// });

// // !### Add a new task
// addBtn.addEventListener("click", addTask);

// // !### Add reel time search
// searchInput.addEventListener("input", searchTasks);

import { nameRegex, validate } from "./utils/validation.js";
// *================> HTML Elements

const firstNameInput=document.getElementById("firstNameInput");
const lastNameInput=document.getElementById("lastNameInput");
const emailInput=document.getElementById("emailInput");
const passwordInput=document.getElementById("passwordInput");

const registerBtn=document.getElementById("registerBtn");


// ^ >=========|> Variables
const usersArr = JSON.parse(localStorage.getItem("users")) || []


// $~ >=========|> Functions
function signup(){
const isExist = usersArr.find(user => user.email === emailInput.value)
if(isExist){
  alert("User already exists")
  return
}

 let user = {
   firstName : firstNameInput.value,
   lastName : lastNameInput.value,
   email : emailInput.value,
   password : passwordInput.value
 }
 usersArr.push(user)
 localStorage.setItem("users", JSON.stringify(usersArr))
 window.location.assign = "./signin.html"
}


// & >=========|> Events

registerBtn.addEventListener("click",signup);

firstNameInput.addEventListener("input",function(){
  validate(firstNameInput,nameRegex);
})