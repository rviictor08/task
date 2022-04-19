// Função de adicionar tarefas

function addTask(){
    // titulo da tarefas
    const taskTitle = document.querySelector('#task-title').value;
    console.log(taskTitle);

    if(taskTitle){
        // clonar o template
        const template = document.querySelector('.template');
        // console.log(template);
        const newTask = template.cloneNode(true);
        // console.log(newTask);

        // adicionar o título
        // <p></p>
        newTask.querySelector(".task-title").textContent = taskTitle;
        // console.log(newTask);

        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        const removeBtn = newTask.querySelector(".btn-remove")
          .addEventListener("click", function(){
              removeTask(this);
          })

          function removeTask(task){
            task.parentNode.remove(task);
          }

          const doneBtn = newTask.querySelector(".btn-done")
          .addEventListener("click", function(){
              removeTask(this);
          })

          function completeTask(task){
              const taskComplete = task.parentNode;
              taskComplete.classList.toglle("done");
          }
    }

    // limpar texto
    document.querySelector('#task-title').value ="";
}

const addBtn = document.querySelector('#btn-add')

addBtn.addEventListener("click", function(e){
    e.preventDefault(); //não efetuar reload ou [F5] no navegador
    console.log('eu cliquei no botão');
    addTask();
})