import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";

class EditPage extends Component {
  render() {
    return (
      <div>
        Edit
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={expense => {
            console.log(expense);

            this.props.dispatch(
              editExpense(this.props.match.params.id, expense)
            );
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditPage);
