import styled from "styled-components"

export const TaskListContainer = styled.ul`
    min-height: 80vh;
    width: 45vw;
    background-color: #f9f9f9;
    padding-left: 0px;
`

export const TaskListItem = styled.li`
    height: 20vh;
    width: 30vw;
    background-color: #ffffff;
    border-radius: 10px;
    list-style-type: none;
    margin-bottom: 8px;
`

export const TaskTitle = styled.p`
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 5px;
`

export const TaskDescriptionText = styled.p`
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 5px;
`

export const TaskStatusText = styled.p`
    color: #333333;
    font-size: 18px;
    font-family: "Roboto";
`