import { Text } from "react-native";
import React, { useState } from "react";
import { AddExpenseButton, Card, Container, DateCard, DateInput, Input } from "./style";
import { ExpensesProps } from "../../types/expenses";
import { ExpensePost } from "../../services/expense-service";
import { CommonActions, useNavigation } from "@react-navigation/native";

const AddExpense: React.FC<ExpensesProps> = props => {

    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleSave = async () => {
        try {
            const expense = {
                date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                item: `${description}`,
                value: Number(value),
                additionalInfo: {},
            };

            await ExpensePost(expense)
            navigation
        } catch (error) {
            console.log(error)
        }
        navigation.dispatch(CommonActions.navigate('Home'))
    }

    return (
        <Container>
            <Card>
                <Text>Adicione uma nova Despesa</Text>
                <Input
                    value={value}
                    maxLength={10}
                    onChangeText={(valor) => setValue(valor)}
                    placeholder="Informe o valor da despesa"
                />
                <Input
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    placeholder={"Informe uma descrição"}
                />
                <Text>Informe a data</Text>
                <DateCard>
                    <DateInput
                        value={day}
                        keyboardType={"numeric"}
                        maxLength={2}
                        onChangeText={(text) => setDay(text)}
                        placeholder="dd"
                    />
                    <DateInput
                        value={month}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={(text) => setMonth(text)}
                        placeholder="mm"
                    />
                    <DateInput
                        value={year}
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={(text) => setYear(text)}
                        placeholder="yyyy"
                    />
                </DateCard>
                <AddExpenseButton onPress={handleSave}>
                    <Text style={{ color: "white" }}>Salvar</Text>
                </AddExpenseButton>
            </Card>
        </Container>
    )
}

export default AddExpense;