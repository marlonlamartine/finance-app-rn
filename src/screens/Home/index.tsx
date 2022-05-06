import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import ExpenseCard from "../../components/ExpenseCard";
import { useAuthContext } from "../../contexts/auth";
import { useEditContext } from "../../contexts/edit";
import { ExpenseDelete, ExpenseListGet } from "../../services/expense-service";
import { ExpensesProps } from "../../types/expenses";
import { AddExpense, Container, ExpensesBoard, GreetingText, MoneyText, SecondText, UserCard } from "./style"


const HomeScreen: React.FC = ({ }) => {

    const { user } = useAuthContext();
    const { expense, setExpense } = useEditContext();
    const [expensesList, setExpensesList] = useState<ExpensesProps[]>([]);
    const navigation = useNavigation();

    async function getExpenses() {
        try {
            const expenses: ExpensesProps[] = await ExpenseListGet(1, 10);
            setExpensesList(expenses);
        }
        catch (e) {
            console.log(e)
        }
    }

    async function deleteExpense(id: string) {
        try {
            await ExpenseDelete(id)
        } catch (error) {
            console.log(error);
        }
    }

    const editExpense = (item: ExpensesProps) => {
        if (item) {
            setExpense({
                _id: item._id,
                date: item.date,
                item: item.item,
                value: item.value,

            });
        }

        navigation.dispatch(CommonActions.navigate('EditExpense'));
    }

    useEffect(() => {
        getExpenses()

    }, [expensesList])

    return (
        <Container>
            <UserCard>
                <GreetingText>
                    Olá {user.name}!
                </GreetingText>
                <SecondText>
                    Suas despesas totalizam:
                    <MoneyText> 0 R$</MoneyText>
                </SecondText>
            </UserCard>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <AddExpense onPress={() => navigation.dispatch(CommonActions.navigate('AddExpense', { token: user.token }))}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: "bold" }}>Adicionar</Text>
                </AddExpense>
            </View>
            <ExpensesBoard>
                <FlatList
                    data={expensesList}
                    keyExtractor={item => String(item._id)}
                    renderItem={({ item }) => <ExpenseCard
                        id={item._id!}
                        onPressDelete={() => deleteExpense(item._id!)}
                        onPressEdit={() => editExpense(item)}
                        item={item.item}
                        value={item.value}
                        date={item.date}
                    />}
                />
            </ExpensesBoard>
        </Container>
    );
}

export default HomeScreen;