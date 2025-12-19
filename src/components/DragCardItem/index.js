import { useDrag } from "react-dnd"
import { DargTaskStatusText, DragTaskDescriptionText, DragTaskListItem, DragTaskTitle } from "./styledComponents"

const DragCardItem = props => {
    const {task} = props
    const {id, title, description, status} = task
    const [{isDragging}, dragRef] = useDrag(() => ({
        type: 'TASK',
        item: {id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <DragTaskListItem ref={dragRef} $isDragging={isDragging}>
            <DragTaskTitle>{title}</DragTaskTitle>
            <DragTaskDescriptionText>{description}</DragTaskDescriptionText>
            <DargTaskStatusText>Status: {status}</DargTaskStatusText>
        </DragTaskListItem>
    )
}

export default DragCardItem