import "./scss/to_do.scss";
import { ToDoList } from "./ToDoList";

const d = document,
  app = d.getElementById("app"),
  task = d.createElement("input"),
  list = d.createElement("ul"),
  todo = new ToDoList("miLista");

task.id = "task";
task.classList.add("Task");
task.spellcheck = true;
task.placeholder = "Tarea por hacer...";

list.id = "list";
list.classList.add("List");

app.classList.add("ToDo");
app.appendChild(task);
app.appendChild(list);

todo.render();
