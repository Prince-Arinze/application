import React from 'react';
import './App.css';
import Home from "../src/pages/Home";
import Dashboard from "../src/pages/Dashboard";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Modal from './pages/Navigation/components/Login';

function App() {
  return (
    <div>
 
     <Router>
         <Switch>
              <Route exact  path= "/" component={Home} />
              <Route exact path="/login" component={Modal} />
              <Route path="/dashboard" component={Dashboard} exact/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
