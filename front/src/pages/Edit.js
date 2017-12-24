import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.match.params.id ,email: '', phone: '', first_name: '', last_name: '', res: ''};

    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
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

  handleSubmit(event) {
  	var user = {};

    if (this.state.email) user["email"] = this.state.email;
    if (this.state.first_name) user["first_name"] = this.state.first_name;
    if (this.state.last_name) user["last_name"] = this.state.last_name;
    if (this.state.phone) user["personal_phone"] = this.state.phone;

    console.log(this.state);

    axios.put(('http://localhost:8080/users/' + this.state.id), user)
	  .then(res => {
      console.log(res);
      this.props.history.push('/user/' + this.state.id);
	  })
	  .catch(error => {
	    console.log(error);
	  });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Edit User</h3>
        </div>
        <div>
          <form>
          	<input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} /><br/><br/>
          	<input type="text" placeholder="first name" value={this.state.first_name} onChange={this.handleFNameChange} /><br/><br/>
          	<input type="text" placeholder="last name" value={this.state.last_name} onChange={this.handleLNameChange} /><br/><br/>
            <input type="text" placeholder="phone number" value={this.state.phone} onChange={this.handlePhoneChange} /><br/><br/>
          </form>
          <button onClick={this.handleSubmit}>Submit</button>
          <br/><br/>
          <Link to={'/user/' + this.state.id}><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}


export default Edit