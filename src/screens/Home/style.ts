import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;    
    background-color: #dddddd;
`

export const GreetingText = styled.Text`
    font-size: 20px;
    font-weight: 400;    
    color: black;
`

export const SecondText = styled.Text`
    font-size: 16px;
    font-weight: 300;
    color: black;
`

export const MoneyText = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: red;
`

export const UserCard = styled.View`
    height: 70px;
    padding: 10px;
    background-color: #dddddd;
`

export const AddExpense = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 30px;
    width: 90px;
    background-color: green;

    border-radius: 10px;
`

export const ExpensesBoard = styled.View`
    height: 600px;
    margin: 10px;
`