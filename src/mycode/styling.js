import React from "react"
import "./style.css"



export default class Styling extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedin: true
        }
    }

    render(){
        return (
            <div>
            {this.state.loggedin === true?"you are logged in ":"you are logged out"}

            <br/>

            {this.state.loggedin === true && "you are logged in"}
         </div>
        )
    }
}
