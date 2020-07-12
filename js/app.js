document.getElementById('formTask').addEventListener('submit', saveTaks);

function saveTaks(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

   const task = {
       // Atributos y Propiedades 
       title, // title : title
       description, // description
    };

    // Almacenar un objeto en localStorage // Save object in localStorage
    //localStorage.setItem('tasks', task);

   // Convertir un objeto a string // Convert a object to string
   //localStorage.setItem('tasks', JSON.stringify(task));


   // Obtener string/objeto // To get object/string
   // console.log(localStorage.getItem('tasks'));
   
   // Convertir un string a objeto  // Convert a string to object
   // Console.log(JSON.parse(localstorage.getItem('tasks)));
    

   //  -- ALMACENAMIENTO -- //

   if(localStorage.getItem('tasks') === null){
       let tasks = [];
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }else{
       let tasks = JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }

    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = ''; // Validar si esta vacio

    for(let i = 0; i < tasks.length; i++){
        //console.log(tasks[i]);

        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `
        <div class="card mb-3"> 
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">
                    Delete
                </a>
            </div>
        </div>`
    }
}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for(let i = 0; i< tasks.length; i++){
        if(tasks[i].title == title){
            // Elimina un elemento del arreglo // Delete a element in array
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

getTasks();
