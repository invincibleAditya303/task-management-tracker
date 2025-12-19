import { useEffect, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {getTasks, getUsers, initializeStorage, saveTasks} from './utils/storage'
import LoginForm from './components/LoginForm'
import TaskForm from './components/TaskForm'

import AuthContext from './context/AuthContext'
import Dashboard from "./components/Dashboard"

const App = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('currentUser')
    return stored ? JSON.parse(stored) : {}
  })
  const [tasksList, setTasksList] = useState(getTasks())
  const usersList = getUsers()

  const onLoggedIn = user => setCurrentUser(user)

  const onLogout = () => setCurrentUser({})

  const onDropTask = (taskId, userId) => {
    console.log(taskId, userId)
    setTasksList(prev => 
      prev.map(task => task.id === taskId ? {...task, assigneeId: userId} : task)
    )
  }

  const onClickStatusChange = taskId => {
    setTasksList(prev => 
      prev.map(task => task.id === taskId ? {...task, status: 'Completed'} : task)
    )
    window.location.reload()
  }

  useEffect(() => initializeStorage(), [usersList])
  useEffect(() => localStorage.setItem('currentUser', JSON.stringify(currentUser)), [currentUser])
  useEffect(() => saveTasks(tasksList), [tasksList])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        onLoggedIn,
        onLogout,
        onDropTask,
        onClickStatusChange
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/addtask' component={TaskForm} />
        </Switch>
      </BrowserRouter>

    </AuthContext.Provider>
  )
}

export default App
