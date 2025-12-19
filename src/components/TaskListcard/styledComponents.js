import styled from "styled-components"

export const TaskListContainer = styled.ul`
    min-height: 80vh;
    width: 45vw;
    padding-left: 0px;
    margin-left: 20px;
`

export const TaskListItem = styled.li`
    height: 30vh;
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
    padding-top: 10px;
    padding-left: 15px;
`

export const TaskDescriptionText = styled.p`
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 15px;
`

export const TaskStatusText = styled.p`
    color: #333333;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
    padding-left: 15px;
`

export const StatusChangeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 15px;
`

export const StatusChangeText = styled.p`
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
`

export const StatusButton = styled.button`
    width: 100px;
    height: 36px;
    background-color: #32cad6;
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 8px;
    border-width: 0px;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        font-size:  10px;
    }
`