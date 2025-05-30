class TodoList {
            constructor() {
                this.tasks = [];

                document.getElementById('addBtn').addEventListener('click', () => this.addTask());

                this.loadTasks();
                this.showTasks();
                console.log(this.tasks);
            }

            addTask() {
                const input = document.getElementById('newTask');
                const text = input.value.trim();
                
                if (text) {
                    this.tasks.push({
                        text: text,
                        done: false
                    });
                    input.value = '';
                    this.saveTasks();
                    this.showTasks();
                }
            }

            saveTasks() {
                let tasksStr = '';
                for (const task of this.tasks) {
                    tasksStr += `${task.text}*${task.done ? '1' : '0'}|`;
                }
                localStorage.setItem('todoTasks', tasksStr);
            }

            loadTasks() {
                const saved = localStorage.getItem('todoTasks');
                if (saved) {
                    this.tasks = [];
                    const taskStrings = saved.split('|');
                    
                    for (const str of taskStrings) {
                        if (str) {
                            const parts = str.split('*');
                            const text = parts[0];
                            const done = parts[1];
                            this.tasks.push({
                                text: text,
                                done: done == 1 ? true : false
                            });
                        }
                    }
                }
            }

            showTasks() {
                const list = document.getElementById('tasks');
                list.innerHTML = '';
                
                this.tasks.forEach((task, index) => {
                    const li = document.createElement('li');
                    if (task.done) li.classList.add('done');
                    
                    li.innerHTML = `${task.text}
                        <button id="toggle${index}">${task.done ? '❌' : '✔️'}</button>
                        <button id="del${index}">🗑️</button>`;
                    list.appendChild(li);

                    document.getElementById(`toggle${index}`).addEventListener('click', () => this.toggleDone(index));
                    document.getElementById(`del${index}`).addEventListener('click', () => this.deleteTask(index));
                });
            }

            toggleDone(index) {
                this.tasks[index].done = !this.tasks[index].done;
                this.saveTasks();
                this.showTasks();
            }

            deleteTask(index) {
                this.tasks.splice(index, 1);
                this.saveTasks();
                this.showTasks();
            }
        }

const todo = new TodoList();