
export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    AddExpense: undefined;
    EditExpense: undefined;
};

export interface User {
    email: string;
    name: string;
    token: string;
}