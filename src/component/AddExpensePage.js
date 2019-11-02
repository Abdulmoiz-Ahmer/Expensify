import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
class AddExpensePage extends Component {
  render() {
    return (
      <div>
        Add Expense
        <ExpenseForm
          onSubmit={expense => {
            console.log(expense);
            this.props.dispatch(addExpense(expense));
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

export default connect()(AddExpensePage);
