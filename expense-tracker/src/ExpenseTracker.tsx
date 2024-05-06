import React, { useState } from "react";
import Form from "./components/Form";
import { FormData } from "./components/Form";
import Table from "./components/Table";

export const categories = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Miscellaneous",
  "Health",
];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<FormData[]>([
    { description: "z", amount: 5, category: "Groceries" },
    { description: "s", amount: 10.6, category: "Utilities" },
    { description: "d", amount: 5, category: "Entertainment" },
    { description: "f", amount: 5, category: "Health" },
  ]);

  const addExpense = (expense: FormData) => {
    setExpenses([...expenses, expense]);
    console.log(expenses);
  };
  const removeExpense = (expenseName: string) => {
    let filteredArr = expenses.filter(
      (expense) => expense.description !== expenseName
    );
    setExpenses([...filteredArr]);
  };
  return (
    <>
      <Form onClick={addExpense}></Form>
      <Table expenses={expenses} clickHandler={removeExpense}></Table>
    </>
  );
};

export default ExpenseTracker;
