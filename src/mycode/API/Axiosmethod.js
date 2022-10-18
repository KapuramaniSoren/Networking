import React, { Component } from 'react'
import axios from 'axios';
export default class AxiosMethods extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
  handleEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }

  handleRegister=()=>{
   axios.post("https://reqres.in/api/register",this.state)
   .then((result)=>{
    console.log(result)
   })

  }
  render() {
    return (
      <div>
        <input type="text" placeholder='enter email' onChange={this.handleEmail}/>
        <input type="password" placeholder='enter password' onChange={this.handlePassword}/>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}