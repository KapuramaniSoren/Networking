import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers"
import React from "react"

export default class Arrays extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            arr: [
                {
                    name: "Ketan",
                    address: "Delhi"
                },
                {
                    name: "Kapuramani",
                    address: "Paradip"
                }
            ]
        }
    }

    handlePush =()=>{
     var temp = this.state.arr
     temp.push({
        name: "Sujata",
        address: "Bhubaneswar"
    })
        this.setState({
            arr:temp
        })
     
    
    }
    handlePop = () => {
        var temp = this.state.arr
        temp.pop()
        this.setState({
            arr:temp
        })
    }

    handleSplice = () =>{
        var temp = this.state.arr
        temp.splice(1,3)
       this.setState({
        arr: temp
       })
    }

    render(){
        return(
            <div>
                Hello from arrays Component
                <br />
                {this.state.arr.map( (single,index)=>{
                    return (
                    <div>
                        {single.name} = {single.address}
                    </div>
                        )
                })}

                <button
                    onClick = {this.handlePush}
                    >
                        Push
                </button>
                <button
                onClick={this.handlePop}
                >
                    Pop
                </button>

                <button
                    onClick = {this.handleSplice}
                    >

                        Splice
                </button>
            </div>
        )
    }
}