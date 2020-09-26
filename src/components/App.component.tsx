import React from "react";
import { Switch, Route } from "react-router-dom";

import ProjectsManagement from "./screens/ProjectsManagement.component";

import "./App.module.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <ProjectsManagement />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
