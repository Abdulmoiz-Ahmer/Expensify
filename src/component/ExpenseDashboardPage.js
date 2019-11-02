import React, { Component } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

export default class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        ExpenseDashboardPage
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}
