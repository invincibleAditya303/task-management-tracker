import { TaskAddButton, TaskFormBgContainer, TaskFormContainer, TaskFormDetailsContainer, TaskFormImage, TaskFormTitle, TaskInputContainer, TaskInputText, TaskLabelHeading } from "./styledComponents"

const TaskForm = () => {
    return (
        <TaskFormBgContainer>
            <TaskFormTitle>Add Task</TaskFormTitle>
            <TaskFormDetailsContainer>
                <TaskFormImage src="" alt='task logo' />
                <TaskFormContainer>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="title">Title</TaskLabelHeading>
                        <TaskInputText type="text" placeholder="Title" id="title" />
                    </TaskInputContainer>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="description">Description</TaskLabelHeading>
                        <TaskInputText type="text" placeholder="Description" id="description" />
                    </TaskInputContainer>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="status">Status</TaskLabelHeading>
                        <TaskInputText type="text" placeholder="Status" id="status" />
                    </TaskInputContainer>
                    <TaskAddButton>Add Task</TaskAddButton>
                </TaskFormContainer>
            </TaskFormDetailsContainer>
        </TaskFormBgContainer>
    )
}

export default TaskForm