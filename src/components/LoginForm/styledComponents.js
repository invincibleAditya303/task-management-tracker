import styled from "styled-components"

export const LoginBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    border: 2px #324155 solid;

    @media (width <= 776px) {
        height: 80vh;
        flex-direction: column;
    }
`

export const LoginImage = styled.img`
    width: 35vw;
    height: 40vh;
    margin-left: 15px;
    border-radius: 20px;

    @media (width <= 776px) {
        width: 70vw;
        height: 35vh;
        margin-left: 0px;
        margin-right: 20px;
    }
`

export const LoginFormContainer = styled.form`
    width: 40vw;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    border: 2px #324155 solid;
    margin-right: 15px;

    @media (width <= 776px) {
        width: 70vw;
        height: 40vh;
        margin-right: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export const InputContainer = styled.div`
    width: 35vw;
    height: 8vh;
    margin-top: 20px;

    @media (width <= 776px) {
        width: 60vw;
        height: 6vh;
    }
`

export const LabelHeading = styled.label`
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    padding-left: 5px;
    padding-bottom: 13px;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const InputText = styled.input`
    width: 100%;
    height: 6vh;
    background-color: transparent;
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    padding-left: 10px;
    border-radius: 20px;
    border: 2px #324155 solid;
    outline: none;

    @media (width <= 776px) {
        height: 5vh;
        font-size: 14px;
    }
`

export const LoginButton = styled.button`
    width: 80px;
    height: 36px;
    background-color: #32cad6;
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 8px;
    border-width: 0px;
    margin-bottom: 10px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        width: 60px;
        font-size:  10px;
    }
`

export const ErrMsg = styled.p`
    color: #ff0b37;
    font-size: 16px;
    font-family: "Roboto";

    @media (width <= 776px) {
        font-size: 12px;
    }
`