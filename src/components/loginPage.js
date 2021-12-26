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

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
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
  handleSubmit(event) {  
    alert(JSON.stringify(this.state)); 

//     (async () => { 
//     const rawResponse = await fetch('http://localhost:8000/auth',{ //, {mode: 'cors'}
//         method: 'POST',
//         // We convert the React state to JSON and send it as the POST body
//         body: JSON.stringify({username:this.state.username,password:this.state.password,error:this.state.error})
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });
//       const content = await rawResponse.json();
//       console.log(content);
// })();
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

postData('http://localhost:8000/auth', {username:this.state.username,password:this.state.password,error:this.state.error})
  .then(data => {
    console.log({username:this.state.username,password:this.state.password,error:this.state.error});
    console.log(data); // JSON data parsed by `data.json()` call
  });
    event.preventDefault();  
    this.setState({
      username: '',
      password:''
    });
}

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}
        action="http://localhost:8000/auth"
        method="post">
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }

          <div class="login-box">
          <h1>Login</h1>
          <div class="textbox">
          <i class="fas fa-user"></i>
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} name="username"/> 
          </div>

          <div class="textbox">
          <label>Password</label>
          <i class="fas fa-lock"></i>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} name="password"/>
          </div>

          <input type="submit" value="Log In" data-test="submit" class="btn"/>
          <Link to="/signup">Sign Up</Link>
          
          </div>

        </form>
      </div>
    );
  }
}

export default LoginPage;