import React, { Component } from 'react';
import '../App.css';
import '../utils/logincss.css'
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyle=makeStyles((theme)=>({
    root:{
        minWidth:'320px',
        backgroundColor:'#EBECF0',
        marginLeft:theme.spacing(1),
        marginTop:theme.spacing(1),
    },
    cardContainer:{
        marginTop:theme.spacing(4),
    }
}))

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

//   handleSubmit(evt) {
//     evt.preventDefault();

//     if (!this.state.username) {
//       return this.setState({ error: 'Username is required' });
//     }

//     if (!this.state.password) {
//       return this.setState({ error: 'Password is required' });
//     }

//     return this.setState({ error: '' });
//   }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  }

  handleSubmit(event) {  
    alert(JSON.stringify(this.state)); 


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  console.log('k '+data);
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('http://localhost:8000/user', {username:this.state.username,password:this.state.password,email:this.state.email,error:this.state.error})
  .then(data => {
    console.log({username:this.state.username,password:this.state.password,email:this.state.email,error:this.state.error});
    console.log(data); // JSON data parsed by `data.json()` call
  });
    event.preventDefault();  
    this.setState({
      username: '',
      password:'',
      email:''
    });
}

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}
        action="http://localhost:8000/user"
        method="post">
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }

          <div class="login-box">
          <h1>SignUp</h1>
          <div class="textbox">
          <i class="fas fa-user"></i>
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} name="username"/> 
          </div>

          <div class="textbox">
          <i class="fas fa-envelope"></i>
          <label>Email id</label>
          <input type="email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} name="email"/> 
          </div>

          <div class="textbox">
          <label>Password</label>
          <i class="fas fa-lock"></i>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} name="password"/>
          </div>

          <input type="submit" value="Sign Up" data-test="submit" class="btn"/>
          <Link to="/"style={{ textDecoration: 'none', color:'white' }}>login</Link>
          
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;