import styled from "styled-components/native";

export const Container = styled.View`
    height: 50px;
    margin: 3px;
    padding: 3px;
    flex-direction: row;
    background-color: whitesmoke;
    border-radius: 10px;
`

export const DataExpense = styled.View`
    height: 40px;
    width: 150px;
    justify-content: flex-start;
    padding-left: 10px ;
    margin-left: 10px;
`

export const ItemText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: black;
`

export const DateText = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: black;
`

export const ValueView = styled.View`
    height: 40px;
    width: 80px;
    justify-content: center;
    padding-left: 10px ;
    margin-left: 10px;
`

export const ValueText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: red;
`

export const ButtonsView = styled.View`
    height: 40px;
    width: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: 20px;
`

export const Edit = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const EditIcon = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`

export const Delete = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const DeleteIcon = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`