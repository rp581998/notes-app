const tasks = {
    tasks: [{
        text: 'Grocercy shopping',
        completed: true
    },{
        text: 'yard',
        completed: false
    }, {
        text: 'hiaia',
        completed: false
    }], 
    getTaskToDo() {
        return this.tasks.filter((task) => task.completed === false)
        // const taskToDo = this.tasks.filter((task) => {
        //     return task.completed === false
        // })
        // return taskToDo
    }
}


console.log(tasks.getTaskToDo())