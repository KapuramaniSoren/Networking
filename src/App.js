import React from "react"


export default class App extends React.Component {

  constructor(props) {
    super(props)


    this.state={
      name : "NextStacks"

    }

  }

   handleName=(event)=>{
    this.setState({
      name: event.target.value
    })

  }

  handleClick = () => {
    this.setState({
      name:""
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleName} />

        {this.state.name}

        <button ocClick={this.handleClick}>
          reset name
  
        </button>
      </div>
    )
  }
}