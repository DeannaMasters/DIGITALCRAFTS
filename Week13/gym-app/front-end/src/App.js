import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import ErrorPage from "./components/ErrorPage";
import About from './components/About';
import Login from './components/Login';
import Products from'./Products';
import Signup from './components/Signup';
import Routines from './components/Routines';
// import data from "./data.json";
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './search'


function App () {  
   return (
      <>
      <Router>
        <Navbar />
        
        
        
        <Switch>
          <Route path='/' exact component={Home}/> 
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />  
          <Route path='/products' component={Products} /> 
          <Route path='/signup' component={Signup} />
          <Route path='/routines' component={Routines} />
          <Route path="/*" component={ErrorPage} />
        </Switch>   
      </Router>   
     </>   
  );
}

export default App;
