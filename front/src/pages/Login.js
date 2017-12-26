import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import bcrypt from 'bcrypt-nodejs'

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
    axios.get('http://localhost:8080/users/verify/' + this.state.email)
      .then(res => {
        console.log(res);
        if (bcrypt.compareSync(this.state.password,res.data[0].password)) {
          this.props.history.push('/user/' + res.data[0]._id);
        } else {
          alert('Wrong password or email');
        }
      });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <form>
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} /><br/><br/>
            <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePwdChange} />
            <br/><br/>
          </form>
        </div>
        <button onClick={this.handleSubmit}>Login</button>
        <br/><br/>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    );
  }
}


export default Login