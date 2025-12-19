import { useDrop } from "react-dnd"
import { UserItemContainer, UsernameText, UserTitle } from "./styledComponents"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

const UserItemCard = props => {
    const {onDropTask} = useContext(AuthContext)
    const {userData} = props
    const {id, name, username} = userData
    
    const [, drop] = useDrop({
        accept: 'TASK',
        drop: draggedItem => onDropTask(draggedItem.id, id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <UserItemContainer ref={drop}>
            <UserTitle>{name}</UserTitle>
            <UsernameText>{username}</UsernameText>
        </UserItemContainer>
    )
}

export default UserItemCard