import AuthContext from "../../context/AuthContext"
import { UserItemContainer, UserTitle } from "../UserItemCard/styledComponents"
import { UsersListContainer } from "./styledComponents"

const UsersList = () => (
    <AuthContext.Consumer>
        {value => {
            const {usersList} = value
            return (
                <UsersListContainer>
                    {usersList.map(eachuser =>
                        <></>
                    )}
                </UsersListContainer>
            )
        }}
    </AuthContext.Consumer>
)

export default UsersList