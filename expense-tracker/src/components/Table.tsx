import React from "react";
import { FormData } from "./Form";
import { categories } from "../ExpenseTracker";

interface Props {
  expenses: FormData[];
  clickHandler: (data: string) => void;
}
const Table = ({ expenses, clickHandler }: Props) => {
  return (
    <>
      <select className="form-select">
        <option value="">All categories</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.description}>
                <td>{expense.description}</td>
                <td>{expense.amount + "$"}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => clickHandler(expense.description)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total</td>
            <td>
              {expenses.reduce((acc, expense) => acc + expense.amount, 0) + "$"}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
