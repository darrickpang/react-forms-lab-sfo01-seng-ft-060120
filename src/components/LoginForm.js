import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUser = (event) => {
    this.setState({
      username: event.target.value,
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  login = (event) => {
    event.preventDefault()
    if(this.state.username !== '' && this.state.password !== ''){
      return this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
    else{
      console.log('Username and/or password cannot be empty.')
    }
    
  }

  render() {
    return (
      <form onSubmit={event => this.login(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUser(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handlePassword(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;