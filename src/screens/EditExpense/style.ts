import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #dddddd;
`

export const Card = styled.View`
    height: 500px;
    width: 300px;
    margin: 30px;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
    background-color: whitesmoke;

    border-radius: 15px;
`

export const Input = styled.TextInput`
    height: 50px;
    width: 200px;
    background-color: whitesmoke;
    margin: 10px 3px 10px 3px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid green;
`

export const DateCard = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
`

export const DateInput = styled.TextInput`
    height: 50px;
    width: 60px;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    margin: 10px 3px 10px 3px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid green;
`

export const EditExpenseButton = styled.TouchableOpacity`
    height: 40px;
    width: 120px;
    background-color: green;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 5px;
`