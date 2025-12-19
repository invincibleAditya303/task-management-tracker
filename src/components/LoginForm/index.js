import { useContext, useState } from "react";
import { InputContainer, InputText, LabelHeading, LoginBgContainer, LoginButton, LoginContainer, LoginImage, LoginFormContainer, ErrMsg } from "./styledComponents";
import {getUsers}  from "../../utils/storage"
import AuthContext from "../../context/AuthContext";

const LoginForm = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const {onLoggedIn} = useContext(AuthContext)
    
    const onChangeUsername = event => setUsername(event.target.value)
    const onChangePassword = event => setPassword(event.target.value)

    const onSubmitLoginForm = event => {
        event.preventDefault()
        const {history} = props

        if (!username || !password) {
            setErrMsg('Please fill in all fields')
        }

        const usersList = getUsers()
        const isExistingUser = usersList.find(user => user.username === username)

        if (!isExistingUser) {
            setErrMsg('Invalid User')
        } else {
            const userLogged = usersList.filter(user => user.username === username)
            const isPasswordMatched = userLogged[0].password === password

            if (!isPasswordMatched) {
                setErrMsg('Invalid Password')
            }

            onLoggedIn(userLogged)
            history.replace('/')
        }
    }

    return (
        <LoginBgContainer>
            <LoginContainer>
                <LoginImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1757255972/member-log-membership-username-password-concept_aa6pe9.jpg" alt="login" />
                <LoginFormContainer onSubmit={onSubmitLoginForm}>
                    <InputContainer>
                        <LabelHeading htmlFor="username">Username</LabelHeading>
                        <InputText type="text" placeholder="Username" value={username} id="username" onChange={onChangeUsername} />
                    </InputContainer>
                    <InputContainer>
                        <LabelHeading htmlFor="password">Password</LabelHeading>
                        <InputText type="password" placeholder="Password" value={password} id="password" onChange={onChangePassword} />
                    </InputContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {errMsg && <ErrMsg>{errMsg}</ErrMsg>}
                </LoginFormContainer>
            </LoginContainer>
        </LoginBgContainer>
    )
}

export default LoginForm