import { useContext } from 'react'
import TaskListCard from '../TaskListcard'
import AuthContext from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'

const DashBoard = props => {
    const {currentUser} = useContext(AuthContext)

    if (Object.keys(currentUser). length === 0) {
        return <Redirect to='/login' />
    }

    return (
        <TaskListCard />
    )
}

export default DashBoard