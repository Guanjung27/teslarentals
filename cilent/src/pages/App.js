import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { SignupCard }from './Signup'
import { Homepage } from './Homepage'





export default function App() {
  return (
    <div>
      

      {/* Add routes here👇 */}
      <Router>
        <Switch>
          <Route path="/home" component= {Homepage} />
         
          <Route path="/signup" component={SignupCard} />
          
        </Switch>
      </Router>
    </div>
  )
}
