import React, { Component } from 'react'

export default class Fetch extends Component {
  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    fetch("https://fakestoreapi.com/products")//forwarding request
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
      this.setState({
        user:result.data
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.user.map((item,i)=>{
          return(
            <div>
            <h1>id:{item.id}</h1>
            <h1>title:{item.title}</h1>
            <h1>price:{item.price}</h1>
            <h1>description:{item.description}</h1>
            <h1>category:{item.category}</h1>
            <img src={item.image} alt="image"/>
            </div>
          )
        })}
      </div>
    )
  }
}