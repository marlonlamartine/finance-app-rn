import React from "react";
import { Text } from "react-native";
import { Background, Container, Input, LoginButton } from "./style";

const LoginScreen = () => {
    return (
        <Background>
            <Container>
                <Input
                    value="Informe seu email"
                    placeholder="Informe seu email"
                />
                <Input
                    value="Informe seu nome"
                    placeholder="Informe seu email"
                />
                <LoginButton>
                    <Text style={{ color: 'green', fontSize: 16 }}>Fazer Login</Text>
                </LoginButton>
            </Container>
        </Background>
    )
}

export default LoginScreen;