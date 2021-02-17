/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/Task.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(name) {
  _classCallCheck(this, Task);

  this.id = new Date().getTime(); // ID basado en los milisegundos del momento

  this.name = name;
  this.isComplete = false;
  return this;
};
;// CONCATENATED MODULE: ./src/ToDoList.js
function ToDoList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ENTER_KEY = 13,
    c = console.log,
    d = document,
    j = JSON,
    ls = localStorage;
var ToDoList = /*#__PURE__*/function () {
  function ToDoList(key) {
    ToDoList_classCallCheck(this, ToDoList);

    this.key = key; // Si esta clave no existe en el LocalStorage,
    // se incluye con un array de datos vacío inicialmente

    if (!ls.getItem(this.key)) {
      ls.setItem(this.key, j.stringify([]));
    } // Vincular los métodos con el constructor para poder acceder a ellos más rápidamente
    // y que, al añadirles un LISTENER que estén atentos a eventos de teclado


    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.removeTask = this.removeTask.bind(this); // -----------------------------------------------------

    this.completeTask = this.completeTask.bind(this);
  }

  _createClass(ToDoList, [{
    key: "addTask",
    value: function addTask(e) {
      // Prueba para comprobar que se captura el evento del teclado establecido...
      // c(e);
      // Validando que no se inserte un texto de Tarea vacío
      // sabiendo que e.target se refiere al INPUT para
      // el inserto de la nueva tarea
      if (!e.target.value) {
        alert("No es posible agregar una tarea vacía.");
      } else {
        if (e.keyCode === ENTER_KEY) {
          var newTask = new Task(e.target.value),
              tasks = j.parse(ls.getItem(this.key));
          tasks.push(newTask);
          ls.setItem(this.key, j.stringify(tasks));
          e.target.value = null; // Prueba de valores actuales tras un nuevo inserto
          // c(newTask, "\n", tasks, "\n", ls);
          // Cargando la nueva tarea en el listado

          this.renderTask(newTask);
        }
      }
    }
  }, {
    key: "editTask",
    value: function editTask(e) {
      var _this = this;

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
        var tasks = j.parse(ls.getItem(this.key)),
            // ID del elemento a editar dentro del array de tareas
        toEdit = tasks.findIndex(function (task) {
          return task.name === e.target.textContent;
        }),
            label = d.querySelector("[data-id=\"".concat(tasks[toEdit].id, "\"]")); // c(tasks, toEdit, tasks[toEdit], label);
        // Sobre el LABEL tratado, se asigna el TEXTO actual editado
        // gracias al atributo contenteditable de la etiqueta

        var saveTask = function saveTask(e) {
          // e.target.textContent = e.target.textContent;
          // tasks[toEdit].name = e.target.textContent;
          // o como resumido haciendo una doble asignación
          e.target.textContent = tasks[toEdit].name = e.target.textContent;
          e.target.blur();
          ls.setItem(_this.key, j.stringify(tasks));
        }; // Cuando el LABEL pulsado pierda el FOCO (evento BLUR)
        // o Cuando se pulse ENTER


        label.addEventListener("blur", function (e) {
          return saveTask(e);
        });
        label.addEventListener("keyup", function (e) {
          return e.keyCode === ENTER_KEY && saveTask(e);
        });
      }
    }
  }, {
    key: "removeTask",
    value: function removeTask(e) {
      // Eligiendo elemento por coincidencia con un selector válido
      if (e.target.matches("a")) {
        var tasks = j.parse(ls.getItem(this.key)),
            // ID del elemento a eliminar dentro del array de tareas
        // comparando el task.id con el valor del data-id del elemento pulsado
        toRemove = tasks.findIndex(function (task) {
          return task.id.toString() === e.target.dataset.id;
        }); // c(tasks, toRemove);
        // Eliminando elemento del array
        // indicando el index del elemento del array a eliminar
        // y la cantidad de elementos a eliminar

        tasks.splice(toRemove, 1); // Actualizando el listado del LocalStorage

        ls.setItem(this.key, j.stringify(tasks)); // Eliminar el <LI> del <UL>

        e.target.parentElement.remove();
      }
    }
  }, {
    key: "completeTask",
    value: function completeTask(e) {
      // Eligiendo elemento por coincidencia con un selector válido
      if (e.target.matches('input[type="checkbox"]')) {
        // c("Aloha INPUT-Checkbox");
        var tasks = j.parse(ls.getItem(this.key)),
            // ID del elemento a eliminar dentro del array de tareas
        // comparando el task.id con el valor del data-id del elemento pulsado
        toComplete = tasks.findIndex(function (task) {
          return task.id.toString() === e.target.id;
        }); // c(tasks, toComplete, tasks[toComplete].isComplete);
        // c(e.target);

        var taskTrash = d.getElementById("trash-".concat(tasks[toComplete].id)); // c(taskTrash);

        if (e.target.checked) {
          e.target.parentElement.classList.add("complete");
          tasks[toComplete].isComplete = true;
          taskTrash.classList.remove("not-completed");
        } else {
          e.target.parentElement.classList.remove("complete");
          tasks[toComplete].isComplete = false;
          taskTrash.classList.add("not-completed");
        } // Actualizando la lista guardada en el LocalStorage


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

  }, {
    key: "renderTask",
    value: function renderTask(task) {
      var template = "\n      <li class=\"List-item ".concat(task.isComplete ? "complete" : "", "\">\n        <input class=\"List-checkbox\" type=\"checkbox\" id=\"").concat(task.id, "\" ").concat(task.isComplete ? "checked" : "", ">\n        <label class=\"List-label\" data-id=\"").concat(task.id, "\" contenteditable spellcheck>").concat(task.name, "</label>\n        <a href=\"#\" id=\"trash-").concat(task.id, "\" data-id=\"").concat(task.id, "\" class=\"List-removeLink ").concat(!task.isComplete ? "not-completed" : "", "\">\uD83D\uDDD1\uFE0F</a>\n      </li>\n    "); // Insertando la plantilla del Task dentro de su listado

      list.insertAdjacentHTML("beforeend", template);
    }
    /**
     * Renderizar la aplicación de ToDoList
     * desde el to_do.js
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tasks = j.parse(ls.getItem(this.key)),
          listTasks = list.children;
      tasks.forEach(function (task) {
        return _this2.renderTask(task);
      }); // Viendo lo que es el listTasks
      // c(listTasks);
      // Lo que se muestra es un HTMLCollection, no un Array,
      // por ello, para tratarlo mediante un forEach, primero,
      // hace falta convertirlo a Array

      Array.from(listTasks).forEach(function (input) {
        // Cuando cambie el estado del INPUT
        input.querySelector('input[type="checkbox"]').addEventListener("change", function (e) {
          // se filtra por el recorrido TASK cuyo ID sea igual al activado
          var task = tasks.filter(function (task) {
            return task.id == e.target.id;
          }); // c(task);
          // c(task[0].id);

          var taskTrash = d.getElementById("trash-".concat(task[0].id)); // c(taskTrash);

          if (e.target.checked) {
            e.target.parentElement.classList.add("complete");
            task[0].isComplete = true;
            taskTrash.classList.remove("not-completed");
          } else {
            e.target.parentElement.classList.remove("complete");
            task[0].isComplete = false;
            taskTrash.classList.add("not-completed");
          } // Actualizando la lista guardada en el LocalStorage


          ls.setItem(_this2.key, j.stringify(tasks));
        });
      }); // Cuando se llega a esta clase, TASK y LIST ya existen como elementos del DOM,
      // por eso son accesibles desde aquí

      task.addEventListener("keyup", this.addTask);
      list.addEventListener("click", this.editTask);
      list.addEventListener("click", this.removeTask); // ------------------------------------------------------

      list.addEventListener("click", this.completeTask);
    }
  }]);

  return ToDoList;
}();
;// CONCATENATED MODULE: ./src/to_do.js


var to_do_d = document,
    app = to_do_d.getElementById("app"),
    to_do_task = to_do_d.createElement("input"),
    to_do_list = to_do_d.createElement("ul"),
    todo = new ToDoList("miLista");
to_do_task.id = "task";
to_do_task.classList.add("Task");
to_do_task.spellcheck = true;
to_do_task.placeholder = "Tarea por hacer...";
to_do_list.id = "list";
to_do_list.classList.add("List");
app.classList.add("ToDo");
app.appendChild(to_do_task);
app.appendChild(to_do_list);
todo.render();
/******/ })()
;