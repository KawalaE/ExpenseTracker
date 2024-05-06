import React from "react";
import { FormData } from "./Form";

interface Props {
  expenses: FormData[];
}
const Table = ({ expenses }: Props) => {
  return (
    <>
      <table className="table table-striped">
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
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
