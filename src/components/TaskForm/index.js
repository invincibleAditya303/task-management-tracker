import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { AddtaskErrMsg, AddTaskSuccessMsg, TaskAddButton, TaskFormBgContainer, TaskFormContainer, TaskFormDetailsContainer, TaskFormImage, TaskFormTitle, TaskInputContainer, TaskInputText, TaskLabelHeading } from "./styledComponents"
import { getTasks, saveTasks } from "../../utils/storage"

const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState(() => getTasks())
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const onChangeTitle = event => setTitle(event.target.value)
    const onChangeDescription = event => setDescription(event.target.value)

    const onSubmitTaskForm = event => {
        event.preventDefault()

        if (!title || description) {
            setErrMsg('Please fill in all the fields')
        }
        const newTask = {
            id: uuidv4(),
            title,
            description,
            assigneeId: null,
            status: 'Pending'
        }

        setTasks(prev => [...prev, newTask])
        setSuccessMsg('Task added successfully')
        setTitle('')
        setDescription('')
        setErrMsg('')
    }

    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    return (
        <TaskFormBgContainer>
            <TaskFormTitle>Add Task</TaskFormTitle>
            <TaskFormDetailsContainer>
                <TaskFormImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1765957242/Sandy_Bus-37_Single-08_ywqxcq.jpg" alt='task logo' />
                <TaskFormContainer onSubmit={onSubmitTaskForm}>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="title">Title</TaskLabelHeading>
                        <TaskInputText type="text" placeholder="Title" value={title} id="title" onChange={onChangeTitle} />
                    </TaskInputContainer>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="description">Description</TaskLabelHeading>
                        <TaskInputText type="text" placeholder="Description" value={description} id="description" onChange={onChangeDescription} />
                    </TaskInputContainer>
                    <TaskAddButton>Add Task</TaskAddButton>
                    {errMsg && <AddtaskErrMsg>{errMsg}</AddtaskErrMsg>}
                    {successMsg && <AddTaskSuccessMsg>{successMsg}</AddTaskSuccessMsg>}
                </TaskFormContainer>
            </TaskFormDetailsContainer>
        </TaskFormBgContainer>
    )
}

export default TaskForm