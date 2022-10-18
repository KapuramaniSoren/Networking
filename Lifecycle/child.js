import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class Child extends Component {

  constructor(){
    super()
    this.state={
      text:""
    }
  }
  handlechange=(event)=>{
    this.setState({
      text:event.target.value
    })
  }
  componentDidMount(){
    console.log("hello from component did mount method")
  }
  componentDidUpdate(){
    console.log("hello from component did update method")
  }
  componentWillUnmount(){
    console.log("hello from component will unmount method")
  }
  render() {
    console.log("render method")
    return (
      <div>
        <h1>Child Component</h1>
        <input type="text" onChange={this.handlechange}/>
      </div>
    )
  }
}