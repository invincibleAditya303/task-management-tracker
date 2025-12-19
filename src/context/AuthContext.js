import React from "react"

const AuthContext = React.createContext({
    currentUser: {},
    onLoggedIn: () => {},
    onLogOut: () => {},
    onDropTask: () => {},
    onClickStatusChange: () => {}
})

export default AuthContext