import React from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from "./components/pages/NotFound";
import AddUsers from "./components/Users/AddUsers";
import EditUser from "./components/Users/EditUsers";
import ViewUser from "./components/Users/ViewUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/contact" component={Contact} />
          <Route exact path = "/users/add" component={AddUsers} />
          <Route exact path = "/users/edit/:id" component={EditUser} />
          <Route exact path ="/users/:id" component={ViewUser} />
          <Route component={NotFound}></Route>

        </Switch>
      
    </div>
    </Router>

  );
}

export default App;
