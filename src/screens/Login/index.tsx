import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { useAuthContext } from "../../contexts/auth";
import { Background, Container, Input, LoginButton } from "./style";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { authentication } from "../../services/auth-service";
import { User } from "../../types/routes";
import apiClient from "../../services/api-service";

const LoginScreen: React.FC = ({ }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { user, setUser } = useAuthContext();
    const navigation = useNavigation();

    useEffect(() => {
        if (user?.token) {
            navigation.dispatch(CommonActions.reset({
                index: 1,
                routes: [{
                    name: 'Home',
                    params:
                    {
                        token: user.token,
                        name: user.name,
                        email: user.email
                    }
                }],
            }));
        }
    }, [user, navigation])

    const handleLogin = async () => {
        try {
            const token: string = await authentication(email);
            setUser({
                email: email,
                name: name,
                token: token
            });
            apiClient.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
        } catch (e) {
            console.log(e);
        }
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
                </Button>
            </Container>
        </Background>
    )
}

export default LoginScreen;