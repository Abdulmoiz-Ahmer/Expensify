import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from "uuid";

test("should setup remove action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit action object", () => {
  const action = editExpense("123abc", {
    note: "updated"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "updated"
    }
  });
});

test("should setup add action object with empty values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: "",
      description: "0",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  });
});

test("should setup add action object with values", () => {
  const expense = {
    description: "adding expense",
    amount: 20,
    createdAt: 0,
    note: "heya testing"
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});
