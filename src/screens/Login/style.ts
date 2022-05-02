import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
    colors: ['#12b754', '#b2b5ba'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

export const Input = styled.TextInput`
    height: 60px;
    width: 350px;
    background-color: whitesmoke;
    margin: 10px 3px 10px 3px;
    padding: 10px;
    border-radius: 15px;
`

export const LoginButton = styled.TouchableOpacity`
    height: 40px;
    width: 170px;
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 5px;
`