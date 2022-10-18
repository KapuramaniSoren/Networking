import React, { Component } from 'react'
import axios from "axios"

export default class Fetchaxios extends Component {
  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    // fetch("https://reqres.in/api/users?page=2")//forwarding request
    // .then((response)=>(response.json()))
    // .then((result)=>{
    //   console.log(result)
    //   this.setState({
    //     user:result.data
    //   })
    // })
    axios.get("https://reqres.in/api/users?page=2")
    .then((result)=>{
      console.log(result)
    })
    
  }
  render() {
    return (
      <div>
        {this.state.user.map((item,i)=>{
          return(
            <div>
            <h1>fname:{item.first_name}</h1>
            <img src={item.avatar} alt="image"/>
            </div>
          )
        })}
      </div>
    )
  }
}