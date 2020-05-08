import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
