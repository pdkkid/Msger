import React from "react";
import { FC } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { Sidebar } from "./components/sidebar";

export const Routes: FC = () => {
  return (
    <div>
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
