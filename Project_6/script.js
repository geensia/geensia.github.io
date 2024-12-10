document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const todoList = document.getElementById('todo-list');
    const newTask = createTaskElement(taskText);
    todoList.appendChild(newTask);
  
    taskInput.value = '';
  });
  
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
  
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