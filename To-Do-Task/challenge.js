let taskName = document.querySelector(".input");
let addTask = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

addTask.onclick = function () {
    if (taskName.value) {
        let parentDiv = document.createElement("div");
        let myDiv = document.createElement("div");
        let mySpan = document.createElement("span");

        myDiv.classList.add("task");
        mySpan.classList.add("delete");

        myDiv.textContent = taskName.value;
        mySpan.textContent = "Delete";

        myDiv.appendChild(mySpan);
        parentDiv.appendChild(myDiv);

        tasks.appendChild(parentDiv);
        saveTasks();
        setDeleteHandler(mySpan);
    }
    taskName.value = "";
};

function setDeleteHandler(deleteButton) {
    deleteButton.onclick = function () {
        this.parentElement.remove();
        saveTasks();
    };
}

function loadTasks() {
    let tasksHtml = window.localStorage.getItem("tasks");
    if (tasksHtml) {
        tasks.innerHTML = tasksHtml;
        let deleteButtons = tasks.querySelectorAll(".delete");
        deleteButtons.forEach(setDeleteHandler);
    }
}

function saveTasks() {
    window.localStorage.setItem("tasks", tasks.innerHTML);
}

loadTasks();