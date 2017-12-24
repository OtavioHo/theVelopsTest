import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.match.params.id ,email: '', password: '', confirm_password: ''};

    this.handleConfPwdChange = this.handleConfPwdChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePwdChange(event) {
    this.setState({password: event.target.value});
  }

  handleConfPwdChange(event) {
    this.setState({confirm_password: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.password === this.state.confirm_password){
    	var user = {"password": this.state.password};

      axios.put(('http://localhost:8080/users/' + this.state.id), user)
  	  .then(res => {
        this.props.history.push("/user/" + this.state.id);
  	  })
  	  .catch(error => {
  	    console.log(error);
  	  });
    } else {
      alert("the passwords doesn't match");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Change Password</h3>
        </div>
        <div>
          <form>
            <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePwdChange} /><br/><br/>
            <input type="password" placeholder="confirm password" value={this.state.confirm_password} onChange={this.handleConfPwdChange} /><br/><br/>
          </form>
          <button onClick={this.handleSubmit}>Submit</button>
          <br/><br/>
          <Link to={'/user/' + this.state.id}><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}


export default Password