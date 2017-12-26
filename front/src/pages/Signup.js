import React from 'react'
import axios from 'axios'
import bcrypt from 'bcrypt-nodejs'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password: '', phone: '', first_name: '', last_name: '', res: ''};

    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFNameChange(event) {
  	this.setState({first_name: event.target.value});
  }

  handlePhoneChange(event) {
  	this.setState({phone: event.target.value});
  }

  handleLNameChange(event) {
  	this.setState({last_name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePwdChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
  	var user = {"email": this.state.email,
        				"first_name": this.state.first_name,
        				"last_name": this.state.last_name,
        				"personal_phone": this.state.phone,
        				"password": bcrypt.hashSync(this.state.password)};

    axios.post('http://localhost:8080/users', user)
	  .then(res => {
      this.props.history.push("/user/" + res.data._id);
	  })
	  .catch(error => {
	    console.log(error);
	  });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Create User</h3>
        </div>
        <div>
          <form>
          	<input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} /><br/><br/>
          	<input type="text" placeholder="first name" value={this.state.first_name} onChange={this.handleFNameChange} /><br/><br/>
          	<input type="text" placeholder="last name" value={this.state.last_name} onChange={this.handleLNameChange} /><br/><br/>
            <input type="text" placeholder="phone number" value={this.state.phone} onChange={this.handlePhoneChange} /><br/><br/>
            <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePwdChange} />
            <br/><br/>
          </form>
          <button onClick={this.handleSubmit}> Sign In </button>
        </div>
      </div>
    );
  }
}


export default Signup