import React from "react";
import { Switch, Route } from "react-router-dom";

import AppHeader from "../components/AppHeader/AppHeader.component";
import ProjectsManagement from "./ProjectsManagement/ProjectsManagement.component";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader>
        <p>Hello, world</p>
      </AppHeader>
      <Switch>
        <Route path="/">
          <ProjectsManagement />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
