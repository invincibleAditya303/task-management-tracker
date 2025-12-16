import { useDrag } from "react-dnd"
import { TaskDescriptionText, TaskListContainer, TaskListItem, TaskStatusText, TaskTitle } from "./styledComponents"
import AuthContext from "../../context/AuthContext"
import DragCardItem from "../DragCardItem"

const TaskListCard = () => (
    <AuthContext.Consumer>
        {value => {
            const {tasksList, currentUser} = value
            return (
                <>
                {currentUser.role === 'user' &&
                    <TaskListContainer>
                        {tasksList.map(eachTask => 
                            <TaskListItem key={eachTask.id}>
                                <TaskTitle>{eachTask.title}</TaskTitle>
                                <TaskDescriptionText>{eachTask.description}</TaskDescriptionText>
                                <TaskStatusText>{eachTask.status}</TaskStatusText>
                            </TaskListItem>
                        )}
                    </TaskListContainer>
                }
                {currentUser.role === 'admin' &&
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