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
    { description: "Milk", amount: 5, category: "Groceries" },
  ]);

  const addExpense = (expense: FormData) => {
    setExpenses([...expenses, expense]);
    console.log(expenses);
  };
  return (
    <>
      <Form onClick={addExpense}></Form>
      <Table expenses={expenses}></Table>
    </>
  );
};

export default ExpenseTracker;
