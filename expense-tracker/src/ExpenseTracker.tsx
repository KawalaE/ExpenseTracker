import React, { useState } from "react";
import Form, { categoryName } from "./components/Form";
import { FormData } from "./components/Form";
import Table from "./components/Table";
import CategorySelector from "./components/CategorySelector";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<FormData[]>([
    { description: "z", amount: 5, category: "Groceries" },
    { description: "s", amount: 10.6, category: "Utilities" },
    { description: "d", amount: 5, category: "Entertainment" },
    { description: "f", amount: 5, category: "Health" },
  ]);

  const categories: FormData[categoryName][] = [
    "Groceries",
    "Utilities",
    "Entertainment",
    "Miscellaneous",
    "Health",
  ];

  const [currentCategory, setCurrentCategory] = useState<
    FormData[categoryName] | "All categories"
  >("All categories");

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
  const selectCategory = (
    selectedCategory: FormData[categoryName] | "All categories"
  ) => {
    setCurrentCategory(selectedCategory);
  };
  return (
    <>
      <Form onClick={addExpense} categories={categories}></Form>
      <CategorySelector
        selectHandler={selectCategory}
        categories={categories}
      ></CategorySelector>
      <Table
        expenses={expenses.filter(
          (expense) =>
            expense.category === currentCategory ||
            currentCategory === "All categories"
        )}
        clickHandler={removeExpense}
        currentCategory={currentCategory}
      ></Table>
    </>
  );
};

export default ExpenseTracker;
