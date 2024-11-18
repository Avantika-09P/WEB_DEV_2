const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value;
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit">Edit</button>
      <button class="complete">Complete</button>
      <button class="delete">Delete</button>
    </div>
  `;

  // Edit Task
  li.querySelector('.edit').addEventListener('click', () => {
    const taskSpan = li.querySelector('span');
    const currentTask = taskSpan.textContent;
    const newTask = prompt('Edit your task:', currentTask);
    if (newTask !== null && newTask.trim() !== '') {
      taskSpan.textContent = newTask.trim();
    } else if (newTask !== null) {
      alert('Task cannot be empty!');
    }
  });

  // Mark Task as Complete
  li.querySelector('.complete').addEventListener('click', () => {
    li.querySelector('span').classList.toggle('completed');
  });

  // Delete Task
  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
}


