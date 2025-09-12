const taskTitle = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-btn");

function TaskAddition() {
  if (taskTitle.value.trim() === "") {
    alert("Title is required");
    return;
  }

  let addTask = taskTitle.value.trim();
  let task = document.createElement("div");
  task.classList.add("task-details");

  task.innerHTML = `
    <div class="left-side">
      <input type="checkbox" name="checkbox" />
      <p class="task-title">${addTask}</p>
    </div>
    <div class="right-side">
      <button class="cross-btn">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;

  document.querySelector(".tasks").appendChild(task);
  taskTitle.value = "";
}

// click handler
document.addEventListener("click", function (e) {
  if (e.target.closest(".add-btn")) {
    TaskAddition();
  }
});
function removeTask() {
  const task = document.querySelector(".task-details");
  document.querySelector(".tasks").removeChild(task);
}
document.addEventListener("click", function (e) {
  if (e.target.closest(".cross-btn")) {
    removeTask();
  }
});
