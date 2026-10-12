// console.log("result");
let taskInput = document.getElementById("taskInput");
// let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
//variable kaj kortese naki ta dekha
console.log(taskInput, addBtn, taskList);

// addBtn.addEventListener("click", function () {
//   console.log("btn  clicked");
// });

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = taskInput.value;
  taskList.appendChild(li);
});

// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     console.log("Enter pressed", taskInput.value);
//   }
// });

let li = document.createElement("li");
// console.log(li);

// li.textContent = "learn JS";
// console.log(li);
// taskList.appendChild(li);
