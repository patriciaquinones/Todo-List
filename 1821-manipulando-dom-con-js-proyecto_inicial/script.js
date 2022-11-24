( () => {

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';

    const taskContent = document.createElement('div');
    taskContent.append(checkComplete());

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `
    ${checkComplete()}
    <span class="task">${value}</span>
  
  <i class="fas fa-trash-alt trashIcon icon"></i>`
 // task.innerHTML = content;
 task.appendChild(taskContent);
  list.appendChild(task);
};

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon")
    i.addEventListener("click", completeTask)
    return i
}

const completeTask = (event) => {
    const element = event.target
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
})();
