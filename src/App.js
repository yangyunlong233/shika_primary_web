import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
// views
import Home from "./views/Home/Home";
import Tplmaker from "./views/Tplmaker/Tplmaker";

function App() {
  return (
      <Fragment>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/tplmaker"} component={Tplmaker}/>
      </Fragment>
  );
}

export default App;
