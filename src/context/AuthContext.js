import React from "react"

const AuthContext = React.createContext({
    currentUser: {},
    taskList: [],
    onLoggedIn: () => {},
    onLogOut: () => {}
})

export default AuthContext