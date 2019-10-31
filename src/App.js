import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
// views
import Home from "./views/Home/Home";
import Tplmaker from "./views/Tplmaker/Tplmaker";
import Login from "./views/account/Login";
import Register from "./views/account/Register";

function App() {
  return (
      <Fragment>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/tplmaker"} component={Tplmaker}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/register"} component={Register}/>
      </Fragment>
  );
}

export default App;
