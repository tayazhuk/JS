
window.onload=function(){


	var incompleteTasks = document.getElementById("incomplete_tasks");
	var completedTasks = document.getElementById("completed_tasks");
	document.getElementById('add').onclick=function (){
	var taskInput=document.getElementById('input').value;
	var taskElement = document.createElement("li");
    var checkBox = document.createElement("input");
    var task = document.createElement("input"); //для чекбокса
    var label = document.createElement("label");// для текста
    var deleteButton = document.createElement("button");
	
  checkBox.type = "checkbox";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskInput;
  taskElement.appendChild(checkBox);
  taskElement.appendChild(label);
  taskElement.appendChild(deleteButton);

  incompleteTasks.appendChild(taskElement);
  taskEvents(taskElement, taskCompleted);  
	 taskInput.value = "";
	}
	
  var deleteTask = function() {
  var taskElement = this.parentNode;
  var ul = taskElement.parentNode;
  ul.removeChild(taskElement);
}
	
var taskCompleted = function() {
  var taskElement = this.parentNode;
  completedTasks.appendChild(taskElement);
  taskEvents(taskElement, taskIncomplete);
}

var taskIncomplete = function() {
  var taskElement = this.parentNode;
  incompleteTasks.appendChild(taskElement);
  taskEvents(taskElement, taskCompleted);
}
	
var taskEvents = function(taskElement, checkBoxEventHandler) {
  var checkBox = taskElement.querySelector("input[type=checkbox]");
  var deleteButton = taskElement.querySelector("button.delete");
 
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

// Ждем события от списка выполненных дел
for(var i = 0; i <  incompleteTasks.children.length; i++) {
  taskEvents(incompleteTasks.children[i], taskCompleted);
}
// Ждем события от списка невыполненных дел
for(var i = 0; i <  completedTasks.children.length; i++) {
  taskEvents(completedTasks.children[i], taskIncomplete); 
}

	
	}