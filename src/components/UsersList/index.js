import UserItemCard from "../UserItemCard"
import { UsersListContainer } from "./styledComponents"
import { getUsers } from "../../utils/storage"

const UsersList = () => {
    const usersList = getUsers()
    const filteredUsersList = usersList.filter(eachuser => eachuser.role !== 'admin')
    return (
        <UsersListContainer>
            {filteredUsersList.map(eachuser =>
               <UserItemCard userData={eachuser} key={eachuser.id} />
             )}
        </UsersListContainer>
    )
}

export default UsersList