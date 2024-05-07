import React from "react";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 2, category: "Groceries" },
    { id: 2, description: "Phone bill", amount: 50, category: "Utilities" },
    { id: 3, description: "Netflix", amount: 13, category: "Entertainment" },
  ]);
  const [currentCategory, setCurrentCategory] = useState("All categories");

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => {
          setCurrentCategory(category);
          console.log(currentCategory);
        }}
      ></ExpenseFilter>
      <ExpenseList
        expenses={expenses.filter(
          (e) =>
            e.category === currentCategory ||
            currentCategory === "All categories"
        )}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
