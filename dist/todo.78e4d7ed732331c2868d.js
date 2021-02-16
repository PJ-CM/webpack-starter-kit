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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay5zdGFydGVyLmtpdC0yMDIxLmVpdC8uL3NyYy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0Ly4vc3JjL3RvX2RvLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJuYW1lIiwiaWQiLCJEYXRlIiwiZ2V0VGltZSIsImlzQ29tcGxldGUiLCJFTlRFUl9LRVkiLCJjIiwiY29uc29sZSIsImxvZyIsImQiLCJkb2N1bWVudCIsImoiLCJKU09OIiwibHMiLCJsb2NhbFN0b3JhZ2UiLCJUb0RvTGlzdCIsImtleSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVGFzayIsImJpbmQiLCJlZGl0VGFzayIsInJlbW92ZVRhc2siLCJjb21wbGV0ZVRhc2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsImtleUNvZGUiLCJuZXdUYXNrIiwidGFza3MiLCJwYXJzZSIsInB1c2giLCJyZW5kZXJUYXNrIiwibWF0Y2hlcyIsInRvRWRpdCIsImZpbmRJbmRleCIsInRhc2siLCJ0ZXh0Q29udGVudCIsImxhYmVsIiwicXVlcnlTZWxlY3RvciIsInNhdmVUYXNrIiwiYmx1ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b1JlbW92ZSIsInRvU3RyaW5nIiwiZGF0YXNldCIsInNwbGljZSIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJ0b0NvbXBsZXRlIiwidGFza1RyYXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGVtcGxhdGUiLCJsaXN0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwibGlzdFRhc2tzIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiQXJyYXkiLCJmcm9tIiwiaW5wdXQiLCJmaWx0ZXIiLCJhcHAiLCJjcmVhdGVFbGVtZW50IiwidG9kbyIsInNwZWxsY2hlY2siLCJwbGFjZWhvbGRlciIsImFwcGVuZENoaWxkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxJQUFiLEdBQ0UsY0FBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixPQUFLQyxFQUFMLEdBQVUsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVYsQ0FEZ0IsQ0FDZ0I7O0FBQ2hDLE9BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtJLFVBQUwsR0FBa0IsS0FBbEI7QUFFQSxTQUFPLElBQVA7QUFDRCxDQVBILEM7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFBQSxJQUNFQyxDQUFDLEdBQUdDLE9BQU8sQ0FBQ0MsR0FEZDtBQUFBLElBRUVDLENBQUMsR0FBR0MsUUFGTjtBQUFBLElBR0VDLENBQUMsR0FBR0MsSUFITjtBQUFBLElBSUVDLEVBQUUsR0FBR0MsWUFKUDtBQU1PLElBQU1DLFFBQWI7QUFDRSxvQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWCxDQURlLENBR2Y7QUFDQTs7QUFDQSxRQUFJLENBQUNILEVBQUUsQ0FBQ0ksT0FBSCxDQUFXLEtBQUtELEdBQWhCLENBQUwsRUFBMkI7QUFDekJILFFBQUUsQ0FBQ0ssT0FBSCxDQUFXLEtBQUtGLEdBQWhCLEVBQXFCTCxDQUFDLENBQUNRLFNBQUYsQ0FBWSxFQUFaLENBQXJCO0FBQ0QsS0FQYyxDQVNmO0FBQ0E7OztBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCRixJQUFoQixDQUFxQixJQUFyQixDQUFsQixDQWJlLENBY2Y7O0FBQ0EsU0FBS0csWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCSCxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQWpCSDtBQUFBO0FBQUEsV0FtQkUsaUJBQVFJLENBQVIsRUFBVztBQUNUO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFJLENBQUNBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFkLEVBQXFCO0FBQ25CQyxhQUFLLENBQUMsd0NBQUQsQ0FBTDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlILENBQUMsQ0FBQ0ksT0FBRixLQUFjeEIsU0FBbEIsRUFBNkI7QUFDM0IsY0FBSXlCLE9BQU8sR0FBRyxJQUFJL0IsSUFBSixDQUFTMEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQWxCLENBQWQ7QUFBQSxjQUNFSSxLQUFLLEdBQUdwQixDQUFDLENBQUNxQixLQUFGLENBQVFuQixFQUFFLENBQUNJLE9BQUgsQ0FBVyxLQUFLRCxHQUFoQixDQUFSLENBRFY7QUFHQWUsZUFBSyxDQUFDRSxJQUFOLENBQVdILE9BQVg7QUFDQWpCLFlBQUUsQ0FBQ0ssT0FBSCxDQUFXLEtBQUtGLEdBQWhCLEVBQXFCTCxDQUFDLENBQUNRLFNBQUYsQ0FBWVksS0FBWixDQUFyQjtBQUVBTixXQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxHQUFpQixJQUFqQixDQVAyQixDQVMzQjtBQUNBO0FBRUE7O0FBQ0EsZUFBS08sVUFBTCxDQUFnQkosT0FBaEI7QUFDRDtBQUNGO0FBQ0Y7QUE3Q0g7QUFBQTtBQUFBLFdBK0NFLGtCQUFTTCxDQUFULEVBQVk7QUFBQTs7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU1MsT0FBVCxDQUFpQixPQUFqQixDQUFKLEVBQStCO0FBQzdCO0FBRUEsWUFBSUosS0FBSyxHQUFHcEIsQ0FBQyxDQUFDcUIsS0FBRixDQUFRbkIsRUFBRSxDQUFDSSxPQUFILENBQVcsS0FBS0QsR0FBaEIsQ0FBUixDQUFaO0FBQUEsWUFDRTtBQUNBb0IsY0FBTSxHQUFHTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUN0QyxJQUFMLEtBQWN5QixDQUFDLENBQUNDLE1BQUYsQ0FBU2EsV0FBM0I7QUFBQSxTQUFwQixDQUZYO0FBQUEsWUFHRUMsS0FBSyxHQUFHL0IsQ0FBQyxDQUFDZ0MsYUFBRixzQkFBNkJWLEtBQUssQ0FBQ0ssTUFBRCxDQUFMLENBQWNuQyxFQUEzQyxTQUhWLENBSDZCLENBUTdCO0FBRUE7QUFDQTs7QUFDQSxZQUFNeUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQWpCLENBQUMsRUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQUEsV0FBQyxDQUFDQyxNQUFGLENBQVNhLFdBQVQsR0FBdUJSLEtBQUssQ0FBQ0ssTUFBRCxDQUFMLENBQWNwQyxJQUFkLEdBQXFCeUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNhLFdBQXJEO0FBQ0FkLFdBQUMsQ0FBQ0MsTUFBRixDQUFTaUIsSUFBVDtBQUNBOUIsWUFBRSxDQUFDSyxPQUFILENBQVcsS0FBSSxDQUFDRixHQUFoQixFQUFxQkwsQ0FBQyxDQUFDUSxTQUFGLENBQVlZLEtBQVosQ0FBckI7QUFDRCxTQVBELENBWjZCLENBcUI3QjtBQUNBOzs7QUFDQVMsYUFBSyxDQUFDSSxnQkFBTixDQUF1QixNQUF2QixFQUErQixVQUFBbkIsQ0FBQztBQUFBLGlCQUFJaUIsUUFBUSxDQUFDakIsQ0FBRCxDQUFaO0FBQUEsU0FBaEM7QUFDQWUsYUFBSyxDQUFDSSxnQkFBTixDQUNFLE9BREYsRUFFRSxVQUFBbkIsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNJLE9BQUYsS0FBY3hCLFNBQWQsSUFBMkJxQyxRQUFRLENBQUNqQixDQUFELENBQXZDO0FBQUEsU0FGSDtBQUlEO0FBQ0Y7QUF0Rkg7QUFBQTtBQUFBLFdBd0ZFLG9CQUFXQSxDQUFYLEVBQWM7QUFDWjtBQUNBLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTUyxPQUFULENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDekIsWUFBSUosS0FBSyxHQUFHcEIsQ0FBQyxDQUFDcUIsS0FBRixDQUFRbkIsRUFBRSxDQUFDSSxPQUFILENBQVcsS0FBS0QsR0FBaEIsQ0FBUixDQUFaO0FBQUEsWUFDRTtBQUNBO0FBQ0E2QixnQkFBUSxHQUFHZCxLQUFLLENBQUNNLFNBQU4sQ0FDVCxVQUFBQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3JDLEVBQUwsQ0FBUTZDLFFBQVIsT0FBdUJyQixDQUFDLENBQUNDLE1BQUYsQ0FBU3FCLE9BQVQsQ0FBaUI5QyxFQUE1QztBQUFBLFNBREssQ0FIYixDQUR5QixDQVF6QjtBQUVBO0FBQ0E7QUFDQTs7QUFDQThCLGFBQUssQ0FBQ2lCLE1BQU4sQ0FBYUgsUUFBYixFQUF1QixDQUF2QixFQWJ5QixDQWV6Qjs7QUFDQWhDLFVBQUUsQ0FBQ0ssT0FBSCxDQUFXLEtBQUtGLEdBQWhCLEVBQXFCTCxDQUFDLENBQUNRLFNBQUYsQ0FBWVksS0FBWixDQUFyQixFQWhCeUIsQ0FpQnpCOztBQUNBTixTQUFDLENBQUNDLE1BQUYsQ0FBU3VCLGFBQVQsQ0FBdUJDLE1BQXZCO0FBQ0Q7QUFDRjtBQTlHSDtBQUFBO0FBQUEsV0FnSEUsc0JBQWF6QixDQUFiLEVBQWdCO0FBQ2Q7QUFDQSxVQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU1MsT0FBVCxDQUFpQix3QkFBakIsQ0FBSixFQUFnRDtBQUM5QztBQUVBLFlBQUlKLEtBQUssR0FBR3BCLENBQUMsQ0FBQ3FCLEtBQUYsQ0FBUW5CLEVBQUUsQ0FBQ0ksT0FBSCxDQUFXLEtBQUtELEdBQWhCLENBQVIsQ0FBWjtBQUFBLFlBQ0U7QUFDQTtBQUNBbUMsa0JBQVUsR0FBR3BCLEtBQUssQ0FBQ00sU0FBTixDQUNYLFVBQUFDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDckMsRUFBTCxDQUFRNkMsUUFBUixPQUF1QnJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTekIsRUFBcEM7QUFBQSxTQURPLENBSGYsQ0FIOEMsQ0FVOUM7QUFDQTs7QUFFQSxZQUFJbUQsU0FBUyxHQUFHM0MsQ0FBQyxDQUFDNEMsY0FBRixpQkFBMEJ0QixLQUFLLENBQUNvQixVQUFELENBQUwsQ0FBa0JsRCxFQUE1QyxFQUFoQixDQWI4QyxDQWM5Qzs7QUFFQSxZQUFJd0IsQ0FBQyxDQUFDQyxNQUFGLENBQVM0QixPQUFiLEVBQXNCO0FBQ3BCN0IsV0FBQyxDQUFDQyxNQUFGLENBQVN1QixhQUFULENBQXVCTSxTQUF2QixDQUFpQ0MsR0FBakMsQ0FBcUMsVUFBckM7QUFDQXpCLGVBQUssQ0FBQ29CLFVBQUQsQ0FBTCxDQUFrQi9DLFVBQWxCLEdBQStCLElBQS9CO0FBQ0FnRCxtQkFBUyxDQUFDRyxTQUFWLENBQW9CTCxNQUFwQixDQUEyQixlQUEzQjtBQUNELFNBSkQsTUFJTztBQUNMekIsV0FBQyxDQUFDQyxNQUFGLENBQVN1QixhQUFULENBQXVCTSxTQUF2QixDQUFpQ0wsTUFBakMsQ0FBd0MsVUFBeEM7QUFDQW5CLGVBQUssQ0FBQ29CLFVBQUQsQ0FBTCxDQUFrQi9DLFVBQWxCLEdBQStCLEtBQS9CO0FBQ0FnRCxtQkFBUyxDQUFDRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixlQUF4QjtBQUNELFNBeEI2QyxDQTBCOUM7OztBQUNBM0MsVUFBRSxDQUFDSyxPQUFILENBQVcsS0FBS0YsR0FBaEIsRUFBcUJMLENBQUMsQ0FBQ1EsU0FBRixDQUFZWSxLQUFaLENBQXJCO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNGO0FBQ0E7QUFDQTs7QUFyTUE7QUFBQTtBQUFBLFdBc01FLG9CQUFXTyxJQUFYLEVBQWlCO0FBQ2YsVUFBSW1CLFFBQVEsMkNBQ2FuQixJQUFJLENBQUNsQyxVQUFMLEdBQWtCLFVBQWxCLEdBQStCLEVBRDVDLGdGQUUyQ2tDLElBQUksQ0FBQ3JDLEVBRmhELGdCQUdWcUMsSUFBSSxDQUFDbEMsVUFBTCxHQUFrQixTQUFsQixHQUE4QixFQUhwQiw4REFNTmtDLElBQUksQ0FBQ3JDLEVBTkMsMkNBT3dCcUMsSUFBSSxDQUFDdEMsSUFQN0Isd0RBUWdCc0MsSUFBSSxDQUFDckMsRUFSckIsMEJBU1ZxQyxJQUFJLENBQUNyQyxFQVRLLHdDQVVnQixDQUFDcUMsSUFBSSxDQUFDbEMsVUFBTixHQUFtQixlQUFuQixHQUFxQyxFQVZyRCxpREFBWixDQURlLENBZWY7O0FBQ0FzRCxVQUFJLENBQUNDLGtCQUFMLENBQXdCLFdBQXhCLEVBQXFDRixRQUFyQztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7O0FBNU5BO0FBQUE7QUFBQSxXQTZORSxrQkFBUztBQUFBOztBQUNQLFVBQUkxQixLQUFLLEdBQUdwQixDQUFDLENBQUNxQixLQUFGLENBQVFuQixFQUFFLENBQUNJLE9BQUgsQ0FBVyxLQUFLRCxHQUFoQixDQUFSLENBQVo7QUFBQSxVQUNFNEMsU0FBUyxHQUFHRixJQUFJLENBQUNHLFFBRG5CO0FBR0E5QixXQUFLLENBQUMrQixPQUFOLENBQWMsVUFBQXhCLElBQUk7QUFBQSxlQUFJLE1BQUksQ0FBQ0osVUFBTCxDQUFnQkksSUFBaEIsQ0FBSjtBQUFBLE9BQWxCLEVBSk8sQ0FNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBeUIsV0FBSyxDQUFDQyxJQUFOLENBQVdKLFNBQVgsRUFBc0JFLE9BQXRCLENBQThCLFVBQUFHLEtBQUssRUFBSTtBQUNyQztBQUNBQSxhQUFLLENBQ0Z4QixhQURILENBQ2lCLHdCQURqQixFQUVHRyxnQkFGSCxDQUVvQixRQUZwQixFQUU4QixVQUFBbkIsQ0FBQyxFQUFJO0FBQy9CO0FBQ0EsY0FBSWEsSUFBSSxHQUFHUCxLQUFLLENBQUNtQyxNQUFOLENBQWEsVUFBQTVCLElBQUk7QUFBQSxtQkFBSUEsSUFBSSxDQUFDckMsRUFBTCxJQUFXd0IsQ0FBQyxDQUFDQyxNQUFGLENBQVN6QixFQUF4QjtBQUFBLFdBQWpCLENBQVgsQ0FGK0IsQ0FHL0I7QUFDQTs7QUFFQSxjQUFJbUQsU0FBUyxHQUFHM0MsQ0FBQyxDQUFDNEMsY0FBRixpQkFBMEJmLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXJDLEVBQWxDLEVBQWhCLENBTitCLENBTy9COztBQUVBLGNBQUl3QixDQUFDLENBQUNDLE1BQUYsQ0FBUzRCLE9BQWIsRUFBc0I7QUFDcEI3QixhQUFDLENBQUNDLE1BQUYsQ0FBU3VCLGFBQVQsQ0FBdUJNLFNBQXZCLENBQWlDQyxHQUFqQyxDQUFxQyxVQUFyQztBQUNBbEIsZ0JBQUksQ0FBQyxDQUFELENBQUosQ0FBUWxDLFVBQVIsR0FBcUIsSUFBckI7QUFDQWdELHFCQUFTLENBQUNHLFNBQVYsQ0FBb0JMLE1BQXBCLENBQTJCLGVBQTNCO0FBQ0QsV0FKRCxNQUlPO0FBQ0x6QixhQUFDLENBQUNDLE1BQUYsQ0FBU3VCLGFBQVQsQ0FBdUJNLFNBQXZCLENBQWlDTCxNQUFqQyxDQUF3QyxVQUF4QztBQUNBWixnQkFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbEMsVUFBUixHQUFxQixLQUFyQjtBQUNBZ0QscUJBQVMsQ0FBQ0csU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZUFBeEI7QUFDRCxXQWpCOEIsQ0FtQi9COzs7QUFDQTNDLFlBQUUsQ0FBQ0ssT0FBSCxDQUFXLE1BQUksQ0FBQ0YsR0FBaEIsRUFBcUJMLENBQUMsQ0FBQ1EsU0FBRixDQUFZWSxLQUFaLENBQXJCO0FBQ0QsU0F2Qkg7QUF3QkQsT0ExQkQsRUFYTyxDQXVDUDtBQUNBOztBQUNBTyxVQUFJLENBQUNNLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLEtBQUt4QixPQUFwQztBQUNBc0MsVUFBSSxDQUFDZCxnQkFBTCxDQUFzQixPQUF0QixFQUErQixLQUFLdEIsUUFBcEM7QUFDQW9DLFVBQUksQ0FBQ2QsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsS0FBS3JCLFVBQXBDLEVBM0NPLENBNENQOztBQUNBbUMsVUFBSSxDQUFDZCxnQkFBTCxDQUFzQixPQUF0QixFQUErQixLQUFLcEIsWUFBcEM7QUFDRDtBQTNRSDs7QUFBQTtBQUFBLEk7O0FDUkE7QUFDQTtBQUVBLElBQU1mLE9BQUMsR0FBR0MsUUFBVjtBQUFBLElBQ0V5RCxHQUFHLEdBQUcxRCxPQUFDLENBQUM0QyxjQUFGLENBQWlCLEtBQWpCLENBRFI7QUFBQSxJQUVFZixVQUFJLEdBQUc3QixPQUFDLENBQUMyRCxhQUFGLENBQWdCLE9BQWhCLENBRlQ7QUFBQSxJQUdFVixVQUFJLEdBQUdqRCxPQUFDLENBQUMyRCxhQUFGLENBQWdCLElBQWhCLENBSFQ7QUFBQSxJQUlFQyxJQUFJLEdBQUcsSUFBSXRELFFBQUosQ0FBYSxTQUFiLENBSlQ7QUFNQXVCLFVBQUksQ0FBQ3JDLEVBQUwsR0FBVSxNQUFWO0FBQ0FxQyxVQUFJLENBQUNpQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQWxCLFVBQUksQ0FBQ2dDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQWhDLFVBQUksQ0FBQ2lDLFdBQUwsR0FBbUIsb0JBQW5CO0FBRUFiLFVBQUksQ0FBQ3pELEVBQUwsR0FBVSxNQUFWO0FBQ0F5RCxVQUFJLENBQUNILFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQjtBQUVBVyxHQUFHLENBQUNaLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixNQUFsQjtBQUNBVyxHQUFHLENBQUNLLFdBQUosQ0FBZ0JsQyxVQUFoQjtBQUNBNkIsR0FBRyxDQUFDSyxXQUFKLENBQWdCZCxVQUFoQjtBQUVBVyxJQUFJLENBQUNJLE1BQUwsRyIsImZpbGUiOiJ0b2RvLjc4ZTRkN2VkNzMyMzMxYzI4NjhkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpOyAvLyBJRCBiYXNhZG8gZW4gbG9zIG1pbGlzZWd1bmRvcyBkZWwgbW9tZW50b1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tcIjtcblxuY29uc3QgRU5URVJfS0VZID0gMTMsXG4gIGMgPSBjb25zb2xlLmxvZyxcbiAgZCA9IGRvY3VtZW50LFxuICBqID0gSlNPTixcbiAgbHMgPSBsb2NhbFN0b3JhZ2U7XG5cbmV4cG9ydCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGtleSkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuXG4gICAgLy8gU2kgZXN0YSBjbGF2ZSBubyBleGlzdGUgZW4gZWwgTG9jYWxTdG9yYWdlLFxuICAgIC8vIHNlIGluY2x1eWUgY29uIHVuIGFycmF5IGRlIGRhdG9zIHZhY8OtbyBpbmljaWFsbWVudGVcbiAgICBpZiAoIWxzLmdldEl0ZW0odGhpcy5rZXkpKSB7XG4gICAgICBscy5zZXRJdGVtKHRoaXMua2V5LCBqLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cblxuICAgIC8vIFZpbmN1bGFyIGxvcyBtw6l0b2RvcyBjb24gZWwgY29uc3RydWN0b3IgcGFyYSBwb2RlciBhY2NlZGVyIGEgZWxsb3MgbcOhcyByw6FwaWRhbWVudGVcbiAgICAvLyB5IHF1ZSwgYWwgYcOxYWRpcmxlcyB1biBMSVNURU5FUiBxdWUgZXN0w6luIGF0ZW50b3MgYSBldmVudG9zIGRlIHRlY2xhZG9cbiAgICB0aGlzLmFkZFRhc2sgPSB0aGlzLmFkZFRhc2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmVkaXRUYXNrID0gdGhpcy5lZGl0VGFzay5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlVGFzayA9IHRoaXMucmVtb3ZlVGFzay5iaW5kKHRoaXMpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5jb21wbGV0ZVRhc2sgPSB0aGlzLmNvbXBsZXRlVGFzay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkVGFzayhlKSB7XG4gICAgLy8gUHJ1ZWJhIHBhcmEgY29tcHJvYmFyIHF1ZSBzZSBjYXB0dXJhIGVsIGV2ZW50byBkZWwgdGVjbGFkbyBlc3RhYmxlY2lkby4uLlxuICAgIC8vIGMoZSk7XG5cbiAgICAvLyBWYWxpZGFuZG8gcXVlIG5vIHNlIGluc2VydGUgdW4gdGV4dG8gZGUgVGFyZWEgdmFjw61vXG4gICAgLy8gc2FiaWVuZG8gcXVlIGUudGFyZ2V0IHNlIHJlZmllcmUgYWwgSU5QVVQgcGFyYVxuICAgIC8vIGVsIGluc2VydG8gZGUgbGEgbnVldmEgdGFyZWFcbiAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBhbGVydChcIk5vIGVzIHBvc2libGUgYWdyZWdhciB1bmEgdGFyZWEgdmFjw61hLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gRU5URVJfS0VZKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soZS50YXJnZXQudmFsdWUpLFxuICAgICAgICAgIHRhc2tzID0gai5wYXJzZShscy5nZXRJdGVtKHRoaXMua2V5KSk7XG5cbiAgICAgICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgbHMuc2V0SXRlbSh0aGlzLmtleSwgai5zdHJpbmdpZnkodGFza3MpKTtcblxuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gUHJ1ZWJhIGRlIHZhbG9yZXMgYWN0dWFsZXMgdHJhcyB1biBudWV2byBpbnNlcnRvXG4gICAgICAgIC8vIGMobmV3VGFzaywgXCJcXG5cIiwgdGFza3MsIFwiXFxuXCIsIGxzKTtcblxuICAgICAgICAvLyBDYXJnYW5kbyBsYSBudWV2YSB0YXJlYSBlbiBlbCBsaXN0YWRvXG4gICAgICAgIHRoaXMucmVuZGVyVGFzayhuZXdUYXNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlZGl0VGFzayhlKSB7XG4gICAgLy8gRWxpZ2llbmRvIGVsZW1lbnRvIHBvciBjb2luY2lkZW5jaWEgY29uIHVuIHNlbGVjdG9yIHbDoWxpZG9cbiAgICAvLyAgLT4gU2kgZWwgZXZlbnRvIHByb2R1Y2lkbyB0dXZvIGNvbW8gb2JqZXRpdm9cbiAgICAvLyAgdW4gSU5QVVQgZGUgdGlwbyBDSEVDS0JPWFxuICAgIC8vIGlmIChlLnRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkgYyhcIkFsb2hhIElOUFVULUNoZWNrYm94XCIpO1xuICAgIC8vICAtPiBTaSBlbCBldmVudG8gcHJvZHVjaWRvIHR1dm8gY29tbyBvYmpldGl2b1xuICAgIC8vICB1biBDTEFTUyAuTGlzdC1sYWJlbFxuICAgIC8vIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLkxpc3QtbGFiZWxcIikpIGMoXCJBbG9oYSAuTGlzdC1MQUJFTFwiKTtcbiAgICAvLyAgLT4gU2kgZWwgZXZlbnRvIHByb2R1Y2lkbyB0dXZvIGNvbW8gb2JqZXRpdm9cbiAgICAvLyAgdW5hIGV0aXF1ZXRhIExBQkVMXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJsYWJlbFwiKSkge1xuICAgICAgLy8gYyhcIkFsb2hhIExBQkVMXCIpO1xuXG4gICAgICBsZXQgdGFza3MgPSBqLnBhcnNlKGxzLmdldEl0ZW0odGhpcy5rZXkpKSxcbiAgICAgICAgLy8gSUQgZGVsIGVsZW1lbnRvIGEgZWRpdGFyIGRlbnRybyBkZWwgYXJyYXkgZGUgdGFyZWFzXG4gICAgICAgIHRvRWRpdCA9IHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2submFtZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpLFxuICAgICAgICBsYWJlbCA9IGQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Rhc2tzW3RvRWRpdF0uaWR9XCJdYCk7XG5cbiAgICAgIC8vIGModGFza3MsIHRvRWRpdCwgdGFza3NbdG9FZGl0XSwgbGFiZWwpO1xuXG4gICAgICAvLyBTb2JyZSBlbCBMQUJFTCB0cmF0YWRvLCBzZSBhc2lnbmEgZWwgVEVYVE8gYWN0dWFsIGVkaXRhZG9cbiAgICAgIC8vIGdyYWNpYXMgYWwgYXRyaWJ1dG8gY29udGVudGVkaXRhYmxlIGRlIGxhIGV0aXF1ZXRhXG4gICAgICBjb25zdCBzYXZlVGFzayA9IGUgPT4ge1xuICAgICAgICAvLyBlLnRhcmdldC50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAvLyB0YXNrc1t0b0VkaXRdLm5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgLy8gbyBjb21vIHJlc3VtaWRvIGhhY2llbmRvIHVuYSBkb2JsZSBhc2lnbmFjacOzblxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IHRhc2tzW3RvRWRpdF0ubmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgIGxzLnNldEl0ZW0odGhpcy5rZXksIGouc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBDdWFuZG8gZWwgTEFCRUwgcHVsc2FkbyBwaWVyZGEgZWwgRk9DTyAoZXZlbnRvIEJMVVIpXG4gICAgICAvLyBvIEN1YW5kbyBzZSBwdWxzZSBFTlRFUlxuICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZSA9PiBzYXZlVGFzayhlKSk7XG4gICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImtleXVwXCIsXG4gICAgICAgIGUgPT4gZS5rZXlDb2RlID09PSBFTlRFUl9LRVkgJiYgc2F2ZVRhc2soZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFzayhlKSB7XG4gICAgLy8gRWxpZ2llbmRvIGVsZW1lbnRvIHBvciBjb2luY2lkZW5jaWEgY29uIHVuIHNlbGVjdG9yIHbDoWxpZG9cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcImFcIikpIHtcbiAgICAgIGxldCB0YXNrcyA9IGoucGFyc2UobHMuZ2V0SXRlbSh0aGlzLmtleSkpLFxuICAgICAgICAvLyBJRCBkZWwgZWxlbWVudG8gYSBlbGltaW5hciBkZW50cm8gZGVsIGFycmF5IGRlIHRhcmVhc1xuICAgICAgICAvLyBjb21wYXJhbmRvIGVsIHRhc2suaWQgY29uIGVsIHZhbG9yIGRlbCBkYXRhLWlkIGRlbCBlbGVtZW50byBwdWxzYWRvXG4gICAgICAgIHRvUmVtb3ZlID0gdGFza3MuZmluZEluZGV4KFxuICAgICAgICAgIHRhc2sgPT4gdGFzay5pZC50b1N0cmluZygpID09PSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgICAgICk7XG5cbiAgICAgIC8vIGModGFza3MsIHRvUmVtb3ZlKTtcblxuICAgICAgLy8gRWxpbWluYW5kbyBlbGVtZW50byBkZWwgYXJyYXlcbiAgICAgIC8vIGluZGljYW5kbyBlbCBpbmRleCBkZWwgZWxlbWVudG8gZGVsIGFycmF5IGEgZWxpbWluYXJcbiAgICAgIC8vIHkgbGEgY2FudGlkYWQgZGUgZWxlbWVudG9zIGEgZWxpbWluYXJcbiAgICAgIHRhc2tzLnNwbGljZSh0b1JlbW92ZSwgMSk7XG5cbiAgICAgIC8vIEFjdHVhbGl6YW5kbyBlbCBsaXN0YWRvIGRlbCBMb2NhbFN0b3JhZ2VcbiAgICAgIGxzLnNldEl0ZW0odGhpcy5rZXksIGouc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICAvLyBFbGltaW5hciBlbCA8TEk+IGRlbCA8VUw+XG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlVGFzayhlKSB7XG4gICAgLy8gRWxpZ2llbmRvIGVsZW1lbnRvIHBvciBjb2luY2lkZW5jaWEgY29uIHVuIHNlbGVjdG9yIHbDoWxpZG9cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpIHtcbiAgICAgIC8vIGMoXCJBbG9oYSBJTlBVVC1DaGVja2JveFwiKTtcblxuICAgICAgbGV0IHRhc2tzID0gai5wYXJzZShscy5nZXRJdGVtKHRoaXMua2V5KSksXG4gICAgICAgIC8vIElEIGRlbCBlbGVtZW50byBhIGVsaW1pbmFyIGRlbnRybyBkZWwgYXJyYXkgZGUgdGFyZWFzXG4gICAgICAgIC8vIGNvbXBhcmFuZG8gZWwgdGFzay5pZCBjb24gZWwgdmFsb3IgZGVsIGRhdGEtaWQgZGVsIGVsZW1lbnRvIHB1bHNhZG9cbiAgICAgICAgdG9Db21wbGV0ZSA9IHRhc2tzLmZpbmRJbmRleChcbiAgICAgICAgICB0YXNrID0+IHRhc2suaWQudG9TdHJpbmcoKSA9PT0gZS50YXJnZXQuaWRcbiAgICAgICAgKTtcblxuICAgICAgLy8gYyh0YXNrcywgdG9Db21wbGV0ZSwgdGFza3NbdG9Db21wbGV0ZV0uaXNDb21wbGV0ZSk7XG4gICAgICAvLyBjKGUudGFyZ2V0KTtcblxuICAgICAgbGV0IHRhc2tUcmFzaCA9IGQuZ2V0RWxlbWVudEJ5SWQoYHRyYXNoLSR7dGFza3NbdG9Db21wbGV0ZV0uaWR9YCk7XG4gICAgICAvLyBjKHRhc2tUcmFzaCk7XG5cbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgICB0YXNrc1t0b0NvbXBsZXRlXS5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgdGFza1RyYXNoLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtY29tcGxldGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVcIik7XG4gICAgICAgIHRhc2tzW3RvQ29tcGxldGVdLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGFza1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJub3QtY29tcGxldGVkXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBBY3R1YWxpemFuZG8gbGEgbGlzdGEgZ3VhcmRhZGEgZW4gZWwgTG9jYWxTdG9yYWdlXG4gICAgICBscy5zZXRJdGVtKHRoaXMua2V5LCBqLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBTaW1pbGFyIGFsIHJlbmRlcigpXG4gICAqIEFTw60gbm8gZnVuY2lvbmEgY29ycmVjdGFtZW50ZVxuICAgKi9cbiAgLy8gY29tcGxldGVUYXNrKGUpIHtcbiAgLy8gICBpZiAoZS50YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpIHtcbiAgLy8gICAgIC8vIGMoXCJBbG9oYSBJTlBVVC1DaGVja2JveFwiKTtcblxuICAvLyAgICAgbGV0IHRhc2tzID0gai5wYXJzZShscy5nZXRJdGVtKHRoaXMua2V5KSksXG4gIC8vICAgICAgIGxpc3RUYXNrcyA9IGxpc3QuY2hpbGRyZW47XG5cbiAgLy8gICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB0aGlzLnJlbmRlclRhc2sodGFzaykpO1xuXG4gIC8vICAgICAvLyBWaWVuZG8gbG8gcXVlIGVzIGVsIGxpc3RUYXNrc1xuICAvLyAgICAgLy8gYyhsaXN0VGFza3MpO1xuICAvLyAgICAgLy8gTG8gcXVlIHNlIG11ZXN0cmEgZXMgdW4gSFRNTENvbGxlY3Rpb24sIG5vIHVuIEFycmF5LFxuICAvLyAgICAgLy8gcG9yIGVsbG8sIHBhcmEgdHJhdGFybG8gbWVkaWFudGUgdW4gZm9yRWFjaCwgcHJpbWVybyxcbiAgLy8gICAgIC8vIGhhY2UgZmFsdGEgY29udmVydGlybG8gYSBBcnJheVxuICAvLyAgICAgQXJyYXkuZnJvbShsaXN0VGFza3MpLmZvckVhY2goaW5wdXQgPT4ge1xuICAvLyAgICAgICAvLyBDdWFuZG8gY2FtYmllIGVsIGVzdGFkbyBkZWwgSU5QVVRcbiAgLy8gICAgICAgaW5wdXRcbiAgLy8gICAgICAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgLy8gICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgLy8gICAgICAgICAgIC8vIHNlIGZpbHRyYSBwb3IgZWwgcmVjb3JyaWRvIFRBU0sgY3V5byBJRCBzZWEgaWd1YWwgYWwgYWN0aXZhZG9cbiAgLy8gICAgICAgICAgIGxldCB0YXNrID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCA9PSBlLnRhcmdldC5pZCk7XG4gIC8vICAgICAgICAgICAvLyBjKHRhc2spO1xuICAvLyAgICAgICAgICAgLy8gYyh0YXNrWzBdLmlkKTtcblxuICAvLyAgICAgICAgICAgbGV0IHRhc2tUcmFzaCA9IGQuZ2V0RWxlbWVudEJ5SWQoYHRyYXNoLSR7dGFza1swXS5pZH1gKTtcbiAgLy8gICAgICAgICAgIC8vIGModGFza1RyYXNoKTtcblxuICAvLyAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgLy8gICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gIC8vICAgICAgICAgICAgIHRhc2tbMF0uaXNDb21wbGV0ZSA9IHRydWU7XG4gIC8vICAgICAgICAgICAgIHRhc2tUcmFzaC5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWNvbXBsZXRlZFwiKTtcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuICAvLyAgICAgICAgICAgICB0YXNrWzBdLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgLy8gICAgICAgICAgICAgdGFza1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJub3QtY29tcGxldGVkXCIpO1xuICAvLyAgICAgICAgICAgfVxuXG4gIC8vICAgICAgICAgICAvLyBBY3R1YWxpemFuZG8gbGEgbGlzdGEgZ3VhcmRhZGEgZW4gZWwgTG9jYWxTdG9yYWdlXG4gIC8vICAgICAgICAgICBscy5zZXRJdGVtKHRoaXMua2V5LCBqLnN0cmluZ2lmeSh0YXNrcykpO1xuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLyoqXG4gICAqIFVzbyBkZSBUZW1wbGF0ZVN0cmluZyBwYXJhIGdlbmVyYXIgdW4gdGVtcGxhdGUgSFRNTFxuICAgKiBAcGFyYW0geyp9IHRhc2tcbiAgICovXG4gIHJlbmRlclRhc2sodGFzaykge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cIkxpc3QtaXRlbSAke3Rhc2suaXNDb21wbGV0ZSA/IFwiY29tcGxldGVcIiA6IFwiXCJ9XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIkxpc3QtY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7dGFzay5pZH1cIiAke1xuICAgICAgdGFzay5pc0NvbXBsZXRlID8gXCJjaGVja2VkXCIgOiBcIlwiXG4gICAgfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiTGlzdC1sYWJlbFwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgIHRhc2suaWRcbiAgICAgICAgfVwiIGNvbnRlbnRlZGl0YWJsZSBzcGVsbGNoZWNrPiR7dGFzay5uYW1lfTwvbGFiZWw+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJ0cmFzaC0ke3Rhc2suaWR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICB0YXNrLmlkXG4gICAgfVwiIGNsYXNzPVwiTGlzdC1yZW1vdmVMaW5rICR7IXRhc2suaXNDb21wbGV0ZSA/IFwibm90LWNvbXBsZXRlZFwiIDogXCJcIn1cIj7wn5eR77iPPC9hPlxuICAgICAgPC9saT5cbiAgICBgO1xuXG4gICAgLy8gSW5zZXJ0YW5kbyBsYSBwbGFudGlsbGEgZGVsIFRhc2sgZGVudHJvIGRlIHN1IGxpc3RhZG9cbiAgICBsaXN0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyaXphciBsYSBhcGxpY2FjacOzbiBkZSBUb0RvTGlzdFxuICAgKiBkZXNkZSBlbCB0b19kby5qc1xuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0YXNrcyA9IGoucGFyc2UobHMuZ2V0SXRlbSh0aGlzLmtleSkpLFxuICAgICAgbGlzdFRhc2tzID0gbGlzdC5jaGlsZHJlbjtcblxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB0aGlzLnJlbmRlclRhc2sodGFzaykpO1xuXG4gICAgLy8gVmllbmRvIGxvIHF1ZSBlcyBlbCBsaXN0VGFza3NcbiAgICAvLyBjKGxpc3RUYXNrcyk7XG4gICAgLy8gTG8gcXVlIHNlIG11ZXN0cmEgZXMgdW4gSFRNTENvbGxlY3Rpb24sIG5vIHVuIEFycmF5LFxuICAgIC8vIHBvciBlbGxvLCBwYXJhIHRyYXRhcmxvIG1lZGlhbnRlIHVuIGZvckVhY2gsIHByaW1lcm8sXG4gICAgLy8gaGFjZSBmYWx0YSBjb252ZXJ0aXJsbyBhIEFycmF5XG4gICAgQXJyYXkuZnJvbShsaXN0VGFza3MpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgLy8gQ3VhbmRvIGNhbWJpZSBlbCBlc3RhZG8gZGVsIElOUFVUXG4gICAgICBpbnB1dFxuICAgICAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgICAgLy8gc2UgZmlsdHJhIHBvciBlbCByZWNvcnJpZG8gVEFTSyBjdXlvIElEIHNlYSBpZ3VhbCBhbCBhY3RpdmFkb1xuICAgICAgICAgIGxldCB0YXNrID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCA9PSBlLnRhcmdldC5pZCk7XG4gICAgICAgICAgLy8gYyh0YXNrKTtcbiAgICAgICAgICAvLyBjKHRhc2tbMF0uaWQpO1xuXG4gICAgICAgICAgbGV0IHRhc2tUcmFzaCA9IGQuZ2V0RWxlbWVudEJ5SWQoYHRyYXNoLSR7dGFza1swXS5pZH1gKTtcbiAgICAgICAgICAvLyBjKHRhc2tUcmFzaCk7XG5cbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB0YXNrWzBdLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgdGFza1RyYXNoLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtY29tcGxldGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIHRhc2tbMF0uaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGFza1RyYXNoLmNsYXNzTGlzdC5hZGQoXCJub3QtY29tcGxldGVkXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFjdHVhbGl6YW5kbyBsYSBsaXN0YSBndWFyZGFkYSBlbiBlbCBMb2NhbFN0b3JhZ2VcbiAgICAgICAgICBscy5zZXRJdGVtKHRoaXMua2V5LCBqLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEN1YW5kbyBzZSBsbGVnYSBhIGVzdGEgY2xhc2UsIFRBU0sgeSBMSVNUIHlhIGV4aXN0ZW4gY29tbyBlbGVtZW50b3MgZGVsIERPTSxcbiAgICAvLyBwb3IgZXNvIHNvbiBhY2Nlc2libGVzIGRlc2RlIGFxdcOtXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5hZGRUYXNrKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVkaXRUYXNrKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbW92ZVRhc2spO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY29tcGxldGVUYXNrKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9zY3NzL3RvX2RvLnNjc3NcIjtcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vVG9Eb0xpc3RcIjtcblxuY29uc3QgZCA9IGRvY3VtZW50LFxuICBhcHAgPSBkLmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLFxuICB0YXNrID0gZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gIGxpc3QgPSBkLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcbiAgdG9kbyA9IG5ldyBUb0RvTGlzdChcIm1pTGlzdGFcIik7XG5cbnRhc2suaWQgPSBcInRhc2tcIjtcbnRhc2suY2xhc3NMaXN0LmFkZChcIlRhc2tcIik7XG50YXNrLnNwZWxsY2hlY2sgPSB0cnVlO1xudGFzay5wbGFjZWhvbGRlciA9IFwiVGFyZWEgcG9yIGhhY2VyLi4uXCI7XG5cbmxpc3QuaWQgPSBcImxpc3RcIjtcbmxpc3QuY2xhc3NMaXN0LmFkZChcIkxpc3RcIik7XG5cbmFwcC5jbGFzc0xpc3QuYWRkKFwiVG9Eb1wiKTtcbmFwcC5hcHBlbmRDaGlsZCh0YXNrKTtcbmFwcC5hcHBlbmRDaGlsZChsaXN0KTtcblxudG9kby5yZW5kZXIoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=