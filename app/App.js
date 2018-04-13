import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';

class App extends React.Component {
  
   render() {
      return (
      	<Router>
            <div>
               <h2>Router page</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
                  <li><Link to={'/About'}>About</Link></li>
                  <li><Link to={'/Product'}>Product</Link></li>
                  <li><Link to={'/Contact'}>Contact</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Product' component={Product} />
                  <Route exact path='/Contact' component={Contact} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;