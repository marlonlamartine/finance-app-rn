import { ButtonsView, Container, DataExpense, DateText, Delete, DeleteIcon, Edit, EditIcon, ItemText, ValueText, ValueView } from "./style";
import React from "react";
import { ExpenseCardProps } from "../../types/expenses";

const ExpenseCard: React.FC<ExpenseCardProps> = props => {

    const { item, value, date, onPressEdit, onPressDelete } = props;

    function formatDate(date: Date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return (
        <Container>
            <DataExpense>
                <ItemText>{item}</ItemText>
                <DateText>{formatDate(new Date(date))}</DateText>
            </DataExpense>
            <ValueView>
                <ValueText>{value} R$</ValueText>
            </ValueView>
            <ButtonsView>
                <Edit onPress={onPressEdit}>
                    <EditIcon source={require('../../assets/images/editIcon.png')} />
                </Edit>
                <Delete onPress={onPressDelete}>
                    <DeleteIcon source={require('../../assets/images/delete.png')} />
                </Delete>
            </ButtonsView>
        </Container>
    );
}

export default ExpenseCard;