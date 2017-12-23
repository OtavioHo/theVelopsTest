import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePwdChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email + '| password: ' +this.state.password);
    event.preventDefault();
    axios.get('http://localhost:8080/users')
      .then(res => {
        console.log(res);
        alert(res.data.body);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} /><br/><br/>
            <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePwdChange} />
            <br/><br/>
            <input type="submit" value="Sign In" />
          </form>
        </div>
        <br/>
        <div>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    );
  }
}


export default Login