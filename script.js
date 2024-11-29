document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".todo-input");
    const button = document.querySelector(".todo-button"); 
    const todoList = document.querySelector(".todolist");
    const filter = document.querySelector(".filter-todo"); 

    if (button && input && todoList && filter) {
        
        button.addEventListener("click", function (e) {
            e.preventDefault(); 
            const newTodoText = input.value.trim();
            if (newTodoText) {
                
                const newTodo = document.createElement("li");
                newTodo.classList.add("todo");
                newTodo.innerHTML = `
                    <span class="todo-text">${newTodoText}</span>
                    <div class="actions">
                        <button class="complete-btn"><i class="fa-solid fa-check"></i></button>
                        <button class="trash-btn"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                todoList.appendChild(newTodo);
                input.value = ""; 

                
                const completeBtn = newTodo.querySelector(".complete-btn");
                const trashBtn = newTodo.querySelector(".trash-btn");

                completeBtn.addEventListener("click", function () {
                    newTodo.classList.toggle("completed");
                });

                trashBtn.addEventListener("click", function () {
                    newTodo.classList.add("slide");
                    setTimeout(() => newTodo.remove(), 500); 
                });
            }
        });

        
        filter.addEventListener("change", function () {
            const filterValue = filter.value;
            const todos = Array.from(todoList.children); 

            todos.forEach(function (todo) {
                if (todo.nodeType === 1) { 
                    switch (filterValue) {
                        case "all":
                            todo.style.display = "flex";
                            break;
                        case "completed":
                            todo.style.display = todo.classList.contains("completed") ? "flex" : "none";
                            break;
                        case "incomplete":
                            todo.style.display = !todo.classList.contains("completed") ? "flex" : "none";
                            break;
                    }
                }
            });
        });
    } else {
        console.error("One or more elements were not found.");
    }
});
