window.addEventListener("load", function():void{

let tasksNumber: number = 0;
let enter: HTMLInputElement = (document.getElementById("myInput") as HTMLInputElement);

enter.addEventListener("keypress", function(event: KeyboardEvent): void {
    if(event.key == "Enter") {
        addTask();
        enter.value = "";
    }
});
document.querySelector(".addBtn").addEventListener("click", anon,);

function anon(){
    addTask();
    enter.value = "";
}


 function addTask(): void{
    let li: HTMLLIElement = document.createElement("li");
    li.className = "toDoItem";
    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkBox";
    let label: HTMLLabelElement = document.createElement("label");
    label.innerHTML = enter.value;
    label.className = "taskText";
    let close : HTMLElement = document.createElement("i");
    close.className = "far fa-trash-alt";

    document.getElementById("myUL").appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(close);

    function deleteTask(li: HTMLLIElement): void{
        li.remove();
        tasksNumber--;
        tasksAnzahl();
    }
    close.addEventListener("click", function (event: MouseEvent): void {
        console.log(event);
        deleteTask(li);
    });
    tasksNumber++;
    tasksAnzahl();
 }


function tasksAnzahl (): void{
    document.getElementById("counter").innerText = tasksNumber + " in total";
}

});