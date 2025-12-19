import { StatusButton, StatusChangeContainer, StatusChangeText, TaskDescriptionText, TaskListContainer, TaskListItem, TaskStatusText, TaskTitle } from "./styledComponents"
import AuthContext from "../../context/AuthContext"
import DragCardItem from "../DragCardItem"
import {getTasks} from "../../utils/storage"

const TaskListCard = () => (
    <AuthContext.Consumer>
        {value => {
            const {currentUser, onClickStatusChange} = value
            const tasksList = getTasks()
            const userTasksList = tasksList.filter(eachTask => eachTask.assigneeId === currentUser[0].id)
            console.log(tasksList)
            return (
                <>
                {currentUser[0].role === 'user' &&
                    <TaskListContainer>
                        {userTasksList.map(eachTask => 
                            <TaskListItem key={eachTask.id}>
                               <TaskTitle>{eachTask.title}</TaskTitle>
                                <TaskDescriptionText>{eachTask.description}</TaskDescriptionText>
                                <TaskStatusText>Status: {eachTask.status}</TaskStatusText>
                                <StatusChangeContainer>
                                    <StatusChangeText>Is task completed?</StatusChangeText>
                                    <StatusButton onClick={() => onClickStatusChange(eachTask.id)}>Click Here</StatusButton>
                                </StatusChangeContainer>
                            </TaskListItem>
                        )}
                    </TaskListContainer>
                }
                {currentUser[0].role === 'admin' &&
                    <TaskListContainer>
                        {tasksList.map(eachTask => 
                            <DragCardItem task={eachTask} key={eachTask.id} />
                        )}
                    </TaskListContainer>
                }
                </>
                
            )
        }}
    </AuthContext.Consumer>
)
export default TaskListCard