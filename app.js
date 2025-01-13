const columns = ["todo", "in-progress", "done"];

document.addEventListener("DOMContentLoaded", () => {
    // Drag and Drop functionality
    const taskLists = document.querySelectorAll(".task-list");

    taskLists.forEach((list) => {
        list.addEventListener("dragover", (e) => {
            e.preventDefault();
            const draggingTask = document.querySelector(".dragging");
            list.appendChild(draggingTask);
        });
    });

    const createTask = (name, column) => {
        const task = document.createElement("div");
        task.className = "task";
        task.draggable = true;
        task.textContent = name;
        task.dataset.column = column;

        task.addEventListener("dragstart", () => {
            task.classList.add("dragging");
        });
        task.addEventListener("dragend", () => {
            task.classList.remove("dragging");
        });

        document.getElementById(`${column}-list`).appendChild(task);
    };

    createTask("Task 1", "todo");
    createTask("Task 2", "todo");
    createTask("Task 3", "in-progress");

    // Interactive calendar
    const calendarEl = document.getElementById("calendar");

    function loadCalendar() {
        const calendar = document.createElement("table");
        calendar.innerHTML = `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`;
        const days = new Array(30).fill(null).map((_, i) => i + 1);

        let weekRow = "<tr>";
        days.forEach((day, i) => {
            weekRow += `<td>${day}</td>`;
            if ((i + 1) % 7 === 0) {
                weekRow += "</tr><tr>";
            }
        });

        calendar.innerHTML += weekRow;
        calendarEl.appendChild(calendar);
    }

    loadCalendar();
});
