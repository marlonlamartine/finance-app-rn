import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text } from "react-native";
import { useEditContext } from "../../contexts/edit";
import { ExpenseEdit } from "../../services/expense-service";
import { ExpensesProps } from "../../types/expenses";
import { Card, Container, DateCard, DateInput, EditExpenseButton, Input } from "./style";


const EditExpense: React.FC<ExpensesProps> = ({ }) => {


    const { expense, setExpense } = useEditContext();

    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    console.log('expense =>', expense.item);

    const handleEdit = async () => {
        try {
            const expenseEditado: ExpensesProps = {
                date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                item: `${description}`,
                value: Number(value),
                additionalInfo: expense.additionalInfo ? expense.additionalInfo : {},
            };

            await ExpenseEdit(expense._id!, expenseEditado);
        } catch (error) {
            console.log(error)
        }
        navigation.dispatch(CommonActions.navigate('Home'))
    }

    return (
        <Container>
            <Card>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Editar Despesa</Text>
                <Text>Descrição da despesa</Text>
                <Input
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    placeholder={expense.item}
                />
                <Text>Valor da despesa</Text>
                <Input
                    value={value}
                    maxLength={10}
                    onChangeText={(valor) => setValue(valor)}
                    placeholder={String(expense.value)}
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
                <EditExpenseButton onPress={handleEdit}>
                    <Text style={{ color: "white" }}>Salvar</Text>
                </EditExpenseButton>
            </Card>
        </Container>
    )
}

export default EditExpense;