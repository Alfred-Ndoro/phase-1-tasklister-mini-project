document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit",(e) => {
    e.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const taskList = document.getElementById("tasks");
    if (taskList) {
      taskList.appendChild(taskItem);
    }
  })
});
