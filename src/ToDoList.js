import { Task } from "./Task";

const ENTER_KEY = 13,
  c = console.log,
  d = document,
  j = JSON,
  ls = localStorage;

export class ToDoList {
  constructor(key) {
    this.key = key;

    // Si esta clave no existe en el LocalStorage,
    // se incluye con un array de datos vacío inicialmente
    if (!ls.getItem(this.key)) {
      ls.setItem(this.key, j.stringify([]));
    }

    // Vincular los métodos con el constructor para poder acceder a ellos más rápidamente
    // y que, al añadirles un LISTENER que estén atentos a eventos de teclado
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    // -----------------------------------------------------
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(e) {
    // Prueba para comprobar que se captura el evento del teclado establecido...
    // c(e);

    // Validando que no se inserte un texto de Tarea vacío
    // sabiendo que e.target se refiere al INPUT para
    // el inserto de la nueva tarea
    if (!e.target.value) {
      alert("No es posible agregar una tarea vacía.");
    } else {
      if (e.keyCode === ENTER_KEY) {
        let newTask = new Task(e.target.value),
          tasks = j.parse(ls.getItem(this.key));

        tasks.push(newTask);
        ls.setItem(this.key, j.stringify(tasks));

        e.target.value = null;

        // Prueba de valores actuales tras un nuevo inserto
        // c(newTask, "\n", tasks, "\n", ls);

        // Cargando la nueva tarea en el listado
        this.renderTask(newTask);
      }
    }
  }

  editTask(e) {
    // Eligiendo elemento por coincidencia con un selector válido
    //  -> Si el evento producido tuvo como objetivo
    //  un INPUT de tipo CHECKBOX
    // if (e.target.matches('input[type="checkbox"]')) c("Aloha INPUT-Checkbox");
    //  -> Si el evento producido tuvo como objetivo
    //  un CLASS .List-label
    // if (e.target.matches(".List-label")) c("Aloha .List-LABEL");
    //  -> Si el evento producido tuvo como objetivo
    //  una etiqueta LABEL
    if (e.target.matches("label")) {
      // c("Aloha LABEL");

      let tasks = j.parse(ls.getItem(this.key)),
        // ID del elemento a editar dentro del array de tareas
        toEdit = tasks.findIndex(task => task.name === e.target.textContent),
        label = d.querySelector(`[data-id="${tasks[toEdit].id}"]`);

      // c(tasks, toEdit, tasks[toEdit], label);

      // Sobre el LABEL tratado, se asigna el TEXTO actual editado
      // gracias al atributo contenteditable de la etiqueta
      const saveTask = e => {
        // e.target.textContent = e.target.textContent;
        // tasks[toEdit].name = e.target.textContent;
        // o como resumido haciendo una doble asignación
        e.target.textContent = tasks[toEdit].name = e.target.textContent;
        e.target.blur();
        ls.setItem(this.key, j.stringify(tasks));
      };

      // Cuando el LABEL pulsado pierda el FOCO (evento BLUR)
      // o Cuando se pulse ENTER
      label.addEventListener("blur", e => saveTask(e));
      label.addEventListener(
        "keyup",
        e => e.keyCode === ENTER_KEY && saveTask(e)
      );
    }
  }

  removeTask(e) {
    // Eligiendo elemento por coincidencia con un selector válido
    if (e.target.matches("a")) {
      let tasks = j.parse(ls.getItem(this.key)),
        // ID del elemento a eliminar dentro del array de tareas
        // comparando el task.id con el valor del data-id del elemento pulsado
        toRemove = tasks.findIndex(
          task => task.id.toString() === e.target.dataset.id
        );

      // c(tasks, toRemove);

      // Eliminando elemento del array
      // indicando el index del elemento del array a eliminar
      // y la cantidad de elementos a eliminar
      tasks.splice(toRemove, 1);

      // Actualizando el listado del LocalStorage
      ls.setItem(this.key, j.stringify(tasks));
      // Eliminar el <LI> del <UL>
      e.target.parentElement.remove();
    }
  }

  completeTask(e) {
    // Eligiendo elemento por coincidencia con un selector válido
    if (e.target.matches('input[type="checkbox"]')) {
      // c("Aloha INPUT-Checkbox");

      let tasks = j.parse(ls.getItem(this.key)),
        // ID del elemento a eliminar dentro del array de tareas
        // comparando el task.id con el valor del data-id del elemento pulsado
        toComplete = tasks.findIndex(
          task => task.id.toString() === e.target.id
        );

      // c(tasks, toComplete, tasks[toComplete].isComplete);
      // c(e.target);

      let taskTrash = d.getElementById(`trash-${tasks[toComplete].id}`);
      // c(taskTrash);

      if (e.target.checked) {
        e.target.parentElement.classList.add("complete");
        tasks[toComplete].isComplete = true;
        taskTrash.classList.remove("not-completed");
      } else {
        e.target.parentElement.classList.remove("complete");
        tasks[toComplete].isComplete = false;
        taskTrash.classList.add("not-completed");
      }

      // Actualizando la lista guardada en el LocalStorage
      ls.setItem(this.key, j.stringify(tasks));
    }
  }

  /**
   *
   * Similar al render()
   * ASí no funciona correctamente
   */
  // completeTask(e) {
  //   if (e.target.matches('input[type="checkbox"]')) {
  //     // c("Aloha INPUT-Checkbox");

  //     let tasks = j.parse(ls.getItem(this.key)),
  //       listTasks = list.children;

  //     tasks.forEach(task => this.renderTask(task));

  //     // Viendo lo que es el listTasks
  //     // c(listTasks);
  //     // Lo que se muestra es un HTMLCollection, no un Array,
  //     // por ello, para tratarlo mediante un forEach, primero,
  //     // hace falta convertirlo a Array
  //     Array.from(listTasks).forEach(input => {
  //       // Cuando cambie el estado del INPUT
  //       input
  //         .querySelector('input[type="checkbox"]')
  //         .addEventListener("change", e => {
  //           // se filtra por el recorrido TASK cuyo ID sea igual al activado
  //           let task = tasks.filter(task => task.id == e.target.id);
  //           // c(task);
  //           // c(task[0].id);

  //           let taskTrash = d.getElementById(`trash-${task[0].id}`);
  //           // c(taskTrash);

  //           if (e.target.checked) {
  //             e.target.parentElement.classList.add("complete");
  //             task[0].isComplete = true;
  //             taskTrash.classList.remove("not-completed");
  //           } else {
  //             e.target.parentElement.classList.remove("complete");
  //             task[0].isComplete = false;
  //             taskTrash.classList.add("not-completed");
  //           }

  //           // Actualizando la lista guardada en el LocalStorage
  //           ls.setItem(this.key, j.stringify(tasks));
  //         });
  //     });
  //   }
  // }

  /**
   * Uso de TemplateString para generar un template HTML
   * @param {*} task
   */
  renderTask(task) {
    let template = `
      <li class="List-item ${task.isComplete ? "complete" : ""}">
        <input class="List-checkbox" type="checkbox" id="${task.id}" ${
      task.isComplete ? "checked" : ""
    }>
        <label class="List-label" data-id="${
          task.id
        }" contenteditable spellcheck>${task.name}</label>
        <a href="#" id="trash-${task.id}" data-id="${
      task.id
    }" class="List-removeLink ${!task.isComplete ? "not-completed" : ""}">🗑️</a>
      </li>
    `;

    // Insertando la plantilla del Task dentro de su listado
    list.insertAdjacentHTML("beforeend", template);
  }

  /**
   * Renderizar la aplicación de ToDoList
   * desde el to_do.js
   */
  render() {
    let tasks = j.parse(ls.getItem(this.key)),
      listTasks = list.children;

    tasks.forEach(task => this.renderTask(task));

    // Viendo lo que es el listTasks
    // c(listTasks);
    // Lo que se muestra es un HTMLCollection, no un Array,
    // por ello, para tratarlo mediante un forEach, primero,
    // hace falta convertirlo a Array
    Array.from(listTasks).forEach(input => {
      // Cuando cambie el estado del INPUT
      input
        .querySelector('input[type="checkbox"]')
        .addEventListener("change", e => {
          // se filtra por el recorrido TASK cuyo ID sea igual al activado
          let task = tasks.filter(task => task.id == e.target.id);
          // c(task);
          // c(task[0].id);

          let taskTrash = d.getElementById(`trash-${task[0].id}`);
          // c(taskTrash);

          if (e.target.checked) {
            e.target.parentElement.classList.add("complete");
            task[0].isComplete = true;
            taskTrash.classList.remove("not-completed");
          } else {
            e.target.parentElement.classList.remove("complete");
            task[0].isComplete = false;
            taskTrash.classList.add("not-completed");
          }

          // Actualizando la lista guardada en el LocalStorage
          ls.setItem(this.key, j.stringify(tasks));
        });
    });

    // Cuando se llega a esta clase, TASK y LIST ya existen como elementos del DOM,
    // por eso son accesibles desde aquí
    task.addEventListener("keyup", this.addTask);
    list.addEventListener("click", this.editTask);
    list.addEventListener("click", this.removeTask);
    // ------------------------------------------------------
    list.addEventListener("click", this.completeTask);
  }
}
