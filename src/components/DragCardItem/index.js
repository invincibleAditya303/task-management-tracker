import { useDrag } from "react-dnd"
import { DargTaskStatusText, DragTaskDescriptionText, DragTaskListItem, DragTaskTitle } from "./styledComponents"

const DragCardItem = props => {
    const {task} = props
    const {id, title, description, status} = task
    const [{isDragging}, dragRef] = useDrag(() => ({
        type: 'TASK',
        id: id,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <DragTaskListItem>
            <DragTaskTitle>{title}</DragTaskTitle>
            <DragTaskDescriptionText>{description}</DragTaskDescriptionText>
            <DargTaskStatusText>{status}</DargTaskStatusText>
        </DragTaskListItem>
    )
}

export default DragCardItem