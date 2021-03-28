import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/home'
import Portfolio from './components/pages/Portfolio'


function App() {
  return (
  
   <>
   <Router>     
     
      <Navbar />
      <Switch>
        <Route path='/' exact  component ={Home}/>
        {/* <Route path='/Portfolio'  component = {Portfolio} /> */}
        <Route path='/portfolio' component ={Portfolio}/>
      </Switch>
      </Router>
  </>
  );
}

export default App;
