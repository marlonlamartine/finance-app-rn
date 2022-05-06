import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ExpensesProps } from "../types/expenses";
import React from "react";

interface ChildrenProps {
    children: ReactNode;
}

type EditProps = {
    expense: ExpensesProps;
    setExpense: (expense: ExpensesProps) => void;
}

export const EditContext = createContext<EditProps>({
    expense: { _id: '', date: '', item: '', value: 0 },
    setExpense: () => { }
})

export const EditProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [expense, setExpense] =
        useState<ExpensesProps>({ _id: "", date: "", item: "", value: 1 });

    return (
        <EditContext.Provider value={{ expense, setExpense }}>
            {children}
        </EditContext.Provider>
    )
}

export const useEditContext = () => {
    const context = useContext(EditContext);
    return context;
}