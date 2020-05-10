import React from 'react';
import './App.css';
import Home from "../src/pages/Home";
import Dashboard from "../src/pages/Dashboard";
import { Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <div>
 
      <Router> 
      <Switch>
            <Route exact  path= "/" component={Home} />
            <Route path="/dashboard" component={Dashboard} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
