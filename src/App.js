import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Wiki } from "./components/wiki/Wiki";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/wiki" component={Wiki}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
