let task = document.getElementById("task");
let taskList = document.querySelector(".task-list"); // Use querySelector for a single element

function addTask() {
    let newTask = task.value;
    if (newTask !== "") {
        let li = document.createElement("li");
        li.innerHTML = newTask;
        let span = document.createElement("span");
        span.innerHTML = "✖";
        li.appendChild(span);
        taskList.appendChild(li); // Correct variable name
    } else {
        alert("ENTER A TASK");
    }
    saveData();
    task.value = "";
}

taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
        console.log("clicked on li tag");
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove(); // Remove the parent li when the span is clicked
        saveData();
        console.log("clicked on cross");
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function fetchData() {
    taskList.innerHTML = localStorage.getItem("data");
}

fetchData();