import { useContext } from "react"
import { HeaderBgContainer, HeaderTitle, LinkItem, LinksContainer, LogoutButton } from "./styledComponents"
import AuthContext from "../../context/AuthContext"
import { Link } from "react-router-dom"

const Header = () => {
    const {currentUser, onLogout} = useContext(AuthContext)
    const onClickLogout = () => onLogout()

    return (
        <HeaderBgContainer>
            <HeaderTitle>Task-Management</HeaderTitle>
            <LinksContainer>
                <LinkItem>Home</LinkItem>
                {currentUser[0].role === 'admin' && 
                    <Link to='/addtask' target="_blank" style={{textDecoration: 'none'}}>
                        <LinkItem>Assign Task</LinkItem>
                    </Link>
                }
            </LinksContainer>
            <LogoutButton type="button" onClick={onClickLogout}>Logout</LogoutButton>
        </HeaderBgContainer>
    )
}

export default Header