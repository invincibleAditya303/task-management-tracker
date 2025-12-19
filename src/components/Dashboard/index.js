import { useContext } from 'react'
import TaskListCard from '../TaskListcard'
import AuthContext from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'
import { DashboardBgContainer, DashboardContainer } from './styledComponents'
import UsersList from '../UsersList'
import Header from "../Header"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Dashboard = () => {
    const {currentUser} = useContext(AuthContext)

    if (Object.keys(currentUser).length === 0) {
        return <Redirect to='/login' />
    }

    return (
        <DashboardBgContainer>
            <Header />
            <DndProvider backend={HTML5Backend}>
                <DashboardContainer>
                    <TaskListCard />
                    {currentUser[0].role === 'admin' && <UsersList />}
                </DashboardContainer>
            </DndProvider>
        </DashboardBgContainer>
    )
}

export default Dashboard