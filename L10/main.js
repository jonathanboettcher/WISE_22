window.addEventListener("load", function () {
    let tasksNumber = 0;
    let enter = document.getElementById("myInput");
    enter.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            enter.value = "";
        }
    });
    document.querySelector(".addBtn").addEventListener("click", anon);
    function anon() {
        addTask();
        enter.value = "";
    }
    function addTask() {
        let li = document.createElement("li");
        li.className = "toDoItem";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkBox";
        let label = document.createElement("label");
        label.innerHTML = enter.value;
        label.className = "taskText";
        let close = document.createElement("i");
        close.className = "far fa-trash-alt";
        document.getElementById("myUL").appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(close);
        function deleteTask(li) {
            li.remove();
            tasksNumber--;
            tasksAnzahl();
        }
        close.addEventListener("click", function (event) {
            console.log(event);
            deleteTask(li);
        });
        tasksNumber++;
        tasksAnzahl();
    }
    function tasksAnzahl() {
        document.getElementById("counter").innerText = tasksNumber + " in total";
    }
});
//# sourceMappingURL=main.js.map