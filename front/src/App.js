import React from 'react'
import Login from './pages/Login'
import User from './pages/User'
import Signup from './pages/Signup'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/user/:id" component={User}/>
      <Route path="/signup" component={Signup}/>
    </div>
  </Router>
)
export default BasicExample