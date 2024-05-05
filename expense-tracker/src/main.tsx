import React from "react";
import ReactDOM from "react-dom/client";
import ExpenseTracker from "./ExpenseTracker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExpenseTracker></ExpenseTracker>
  </React.StrictMode>
);
