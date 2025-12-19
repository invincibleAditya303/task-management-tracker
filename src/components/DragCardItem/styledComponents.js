import styled from "styled-components"

export const DragTaskListItem = styled.li`
    height: 20vh;
    width: 30vw;
    background-color: #ffffff;
    opacity: ${({$isDragging}) => ($isDragging ? 0.5 : 1)};
    border-radius: 10px;
    list-style-type: none;
    margin-bottom: 8px;
`

export const DragTaskTitle = styled.p`
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 700;
    padding-top: 10px;
    padding-left: 15px;
`

export const DragTaskDescriptionText = styled.p`
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 15px;
`

export const DargTaskStatusText = styled.p`
    color: #333333;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 400;
    padding-left: 15px;
`