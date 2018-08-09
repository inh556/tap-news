import React from 'react';
import LoginForm from './LoginForm';
import Auth from '../Auth/Auth';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      errors:{},
      user: {
        email: '',
        password: ''
      }
    }
  };
  processForm(event) {
    event.preventDefault();
    const email = this.state.user.email;
    const password = this.state.user.password;
    // need to pass to server later
    console.log(email);
    console.log(password);

    const url = 'http://' + window.location.hostname + ':3000/auth/login';
    const request = new Request(
      url,
      {
        method: 'POST', 
        header: {
          'Accept': 'application/json',
          'Content.Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.user.email,
          password: this.state.user.password
        })
    });
    fetch(request).then(response => {
      if(response.status === 200) {
        this.setState({errors: {}});
        response.json().then(json => {
          console.log(json);
          Auth.authenticateUser(json.token, email);
          window.location.replace('/');
        })
      } 
      else {
        console.log('Login failed');
        response.json().then(json => {
          const errors = json.errors ? json.error: {};
          errors.summary = json.message;
          this.setState({errors});
        })
      }
    } 
    )
  }
  changeUser(event){
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }
  render() {
    return (
      <LoginForm 
        onSubmit={(e) => this.processForm(e)}
        onChange={(e) => this.changeUser(e)}
        errors={this.state.errors} />
    )
  }
}
export default LoginPage;