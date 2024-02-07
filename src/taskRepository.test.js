const tasksRepository = require("./taskRepository")



describe("pruebas", () => {

    // prueba unitaria
    test("Get all tasks", () => {
        // Arrage
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll()

        // Assert
        expect(tasks.length).toBe(2)
        expect(tasks.length == 2).toBe(true)
        expect(typeof task == 'array')
    })

    test("Get one task by id", () => {
        // Arrage
        let task = {};

        // Act 
        task = tasksRepository.getById(1)

        // Assert
        expect(task.title == 'Task 1').toBe(true)
        expect(task.title == 'Task 100').toBe(false)
    })

    test("Create a new task", () => {
        // Arrage
        let tasks = [];
        let task = {};

        // Act 
        task = tasksRepository.createTask({ id: 3, title: 'Task 3', description: 'Do do doo dodo' })
        tasks = tasksRepository.getAll()

        // Assert
        expect(tasks.length).toBe(3)
    })

    test("Update a task", () => {
        // Arrage
        let task = {};

        // Act 
        task = tasksRepository.updateTask(3, { id: 3, title: 'Task 3', description: 'updated' })

        // Assert
        expect(task.description == 'updated').toBe(true)
    })

    test("Update a task", () => {
        // Arrage
        let tasks = [];
        let task = {};

        // Act 
        task = tasksRepository.deleteTask(3)
        tasks = tasksRepository.getAll()

        // Assert
        expect(tasks.length).toBe(2)
    })

})