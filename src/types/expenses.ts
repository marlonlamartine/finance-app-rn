
export interface ExpensesProps {
    _id?: string;
    date: string;
    item: string;
    value: number;
    additionalInfo: object;
}

export type ExpenseCardProps = {
    id: string;
    item: string;
    value: number;
    date: string;
    onPressEdit: () => void;
    onPressDelete: () => void;
}