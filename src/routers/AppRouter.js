import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../component/ExpenseDashboardPage";
import AddExpensePage from "../component/AddExpensePage";
import EditPage from "../component/EditPage";
import Header from "../component/Header";
import HelpPage from "../component/HelpPage";
import NotFoundPage from "../component/NotFoundPage";

export default (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
