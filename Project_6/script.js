// credit to ChatGPT
document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    // find id (task-input) & gets that value that the user inputed 
    const taskText = taskInput.value.trim();
    // get the current value of the input with taskInput.value 
    // .trim() removes any extra white space the user may have entered
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
      // if nothing is put into the input box, then bring this alert up
    }
  
    const todoList = document.getElementById('todo-list');
    const newTask = createTaskElement(taskText);
    todoList.appendChild(newTask);
    // added the new task list under "To Do"
  
    taskInput.value = '';
    // clearing the input section after adding the task and clicking button
  });
  
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // for done button
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function() {
      const doneList = document.getElementById('done-list');
      doneList.appendChild(li);
      li.removeChild(doneButton);
    });
  
    li.appendChild(doneButton);
    return li;
  }