import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import { RootStackParamList } from './types/routes';
import AddExpense from './screens/AddExpense';
import EditExpense from './screens/EditExpense';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RoutesNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddExpense" component={AddExpense} />
                <Stack.Screen name="EditExpense" component={EditExpense} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}