import { useEffect, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {initializeStorage} from './utils/storage'
import LoginForm from './components/LoginForm'

import AuthContext from './context/AuthContext'
import DashBoard from "./components/Dashboard"

const App = () => {
  const [currentUser, setCurrentUser] = useState({})

  const onLoggedIn = user => setCurrentUser(user)

  const onLogout = () => setCurrentUser(null)

  useEffect(() => initializeStorage(), [])
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        onLoggedIn
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/' component={DashBoard} />
        </Switch>
      </BrowserRouter>

    </AuthContext.Provider>
  )
}

export default App
