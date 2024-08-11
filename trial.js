let todoList = [
    { item: "Hare", dueDate: "4-30-39" },
    { item: "Hare", dueDate: "4-30-39" },
  ];
  
  let task = localStorage.getItem("todoList");
  let todo;
  reset(task);
  
  function reset(task) {
    todo = task ? JSON.parse(task) : [];
    displayTask();
  }
  
  displayTask();
  function addTodo() {
    let todoElement = document.querySelector("#todo-input");
    let todoDate = document.querySelector("#item-date");
  
    localStorage.setItem("Todo", JSON.stringify(todo));
  
    let todoItem = todoElement.value;
    let todoTime = todoDate.value;
    todoList.push({ item: todoItem, dueDate: todoTime });
    todoElement.value = "";
    todoDate.value = "";
  
    displayTask();
  }
  
  function displayTask() {
    let displayElement = document.querySelector(".container-items");
    let newHtml = "";
    for (let i = 0; i < todoList.length; i++) {
      let { item, dueDate } = todoList[i];
      if (item === "" && dueDate == "") {
        continue;
      } // skip empty items and undefined dates
      newHtml += `
      <span>${item} 
        </span>
        <span>${dueDate} 
        </span> <button id="todo-delete" onclick="reset(task) displayTask()">Delete</button>`;
    }
    displayElement.innerHTML = newHtml;
  }