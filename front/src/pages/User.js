import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.match.params.id, email:'', first_name:'', last_name:'', personal_phone:''};
    console.log(props);

    this.getUser = this.getUser.bind(this);
    this.getUser('http://localhost:8080/users/' + this.state.id);
  }

  getUser(url){
  	axios.get(url)
    .then(res => {
    		this.setState({email: res.data.email});
        this.setState({first_name: res.data.first_name});
        this.setState({last_name: res.data.last_name});
        this.setState({personal_phone: res.data.personal_phone});
    	})
    .catch(error => {
    	console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Get User</h3>
        </div>
        <div>
          <p>{this.state.email}</p>
          <hr/>
          <p>{this.state.first_name}</p>
          <hr/>
          <p>{this.state.last_name}</p>
          <hr/>
          <p>{this.state.personal_phone}</p>
        </div>
        <br/>
        <div>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    );
  }
}


export default User