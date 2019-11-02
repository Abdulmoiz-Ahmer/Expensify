import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpense from "./selectors/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import { Provider } from "react-redux";

const store = configureStore();

store.dispatch(addExpense({ description: "Gas Bill" ,amount:2400, createdAt:120}));
store.dispatch(addExpense({ description: "Water Bill", amount:1850,createdAt:1200 }));

store.dispatch(setTextFilter("bill"));
store.dispatch(sortByAmount());

// store.dispatch(setTextFilter("water"));

const jsx = (<Provider store={store}>{AppRouter}</Provider>);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
