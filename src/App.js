import React, { createContext } from "react";
import './App.css';
import { UserProvider } from './User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { useState } from 'react';
import PrivetRoute from "./privetroute/PrivetRoute";
import Destination from "./component/Destination/Destination";
import Login from "./component/login/Login";

export const UserContext = createContext();

function App(props) {
  //const [loggedInUser,setLoggedInUser] = useState({});
 const [user,setUser] = useState ({ isLoggedIn: false });
  return (
    
  //<h1>{loggedInUser.email}</h1> 
 //<UserContext.provider value= {[user,setUser]} >  
 <UserContext.Provider value={[user,setUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivetRoute path="/destination/:id">
            <Destination/>
          </PrivetRoute>
          <Route path="/login">
            <Login> </Login>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    
     
     
    
  );
}

export default App;
