import React, { useState } from "react";
import { ActivityIndicator, Alert, Button, Text } from "react-native";
import { useAuthContext } from "../../contexts/auth";
import { Background, Container, Input, LoginButton } from "./style";
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../../services/auth-service";
import apiClient from "../../services/api-service";

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { user, setUser } = useAuthContext();
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState('');
    const navigation = useNavigation();

    if (user?.token) {
        //navigation.navigate(HomeScreen);
        console.log('tem token')
    }

    const handleLogin = async () => {
        setLoading(true);
        try {
            const token = await authentication(email);
            console.log(token)
            setUser({
                email: email,
                name: name,
                token: token,
            })
        } catch (error) {
            setErro('Ocorreu uma falha');
            console.log(error)
        }
        setLoading(false);
    }

    if (user) {
        console.log('tem token')
    }
    else {
        console.log('nada de token')
    }

    return (
        <Background>
            <Container>
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Informe seu email"
                />
                <Input
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Informe seu nome"
                />
                <Button onPress={handleLogin} title={'Login'}>
                    {loading ? (
                        <ActivityIndicator size={"small"} color={"#fff"} />
                    ) : (<LoginButton>Fazer Login</LoginButton>)}
                </Button>
            </Container>
        </Background>
    )
}

export default LoginScreen;