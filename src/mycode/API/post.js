import React, { Component } from 'react'
// import "./design.html"

export default class PostMethod extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleRegister = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then((response) => (response.json()))
      .then((result) => {
        console.log(result)
      })
      .catch((error) => { console.log(error) })
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#7155BB",
          width: 1350,
          height: 600
        }}>
        <center><h1>Login Form</h1></center>
        <center>
            <input type="text" placeholder='enter email' onChange={this.handleEmail} /><br />
            <input type="password" placeholder='enter password' onChange={this.handlePassword} /><br />
            <button onClick={this.handleRegister}>Login</button>
        </center>
      
      </div>
    )
  }
}