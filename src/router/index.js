import React from "react";
import Loadable from "react-loadable";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import App from "page/app";
const Root = () => (
  <Router>
    <Switch>
      <Route
        path="/login"
        exact
        component={Loadable({
          loader: () => import("page/login"),
          loading: () => <div />
        })}
      />
      <Route
        path="/"
        render={props => (
          <App>
            <Switch>
              <Route
                path="/home"
                exact
                component={Loadable({
                  loader: () => import("page/home"),
                  loading: () => <div />
                })}
              />
              <Route
                path="/goods"
                exact
                component={Loadable({
                  loader: () => import("page/goods"),
                  loading: () => <div />
                })}
              />
              <Route
                path="/order"
                exact
                component={Loadable({
                  loader: () => import("page/order"),
                  loading: () => <div />
                })}
              />
              <Route render={() => <Redirect to="/login" />} />
              <Route
                component={Loadable({
                  loader: () => import("components/404"),
                  loading: () => <div />
                })}
              />
            </Switch>
          </App>
        )}
      />
    </Switch>
  </Router>
);

export default Root;
