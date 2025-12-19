export const initializeStorage = () => {
    if (!localStorage.getItem('users')) {
        const users = [
            {id: 1, username: 'johndoe_123', password: 'john@123', name: 'John Doe', role: 'admin'},
            {id: 2, username: 'bobjohn_123', password: 'bob@123', name: 'Bob Johnson', role: 'user'},
            {id: 3, username: 'alexsmith_123', password: 'alex@123', name: 'Alex Smith', role: 'user'},
            {id: 4, username: 'steveclaire_123', password: 'steve@123', name: 'Steve Claire', role: 'user'}
        ]
        localStorage.setItem('users', JSON.stringify(users))
    }

    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]))
    }
}

export const getUsers = () => {
    const usersList = localStorage.getItem('users')
    return usersList ? JSON.parse(usersList) : []
}

export const saveTasks = tasks => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const getTasks = () => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
}