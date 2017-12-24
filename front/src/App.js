import React from 'react'
import Login from './pages/Login'
import User from './pages/User'
import Signup from './pages/Signup'
import Edit from './pages/Edit'
import Password from './pages/Password'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/user/:id" component={User}/>
      <Route path="/edit/:id" component={Edit}/>
      <Route path="/password/:id" component={Password}/>
      <Route path="/signup" component={Signup}/>
    </div>
  </Router>
)
export default BasicExample