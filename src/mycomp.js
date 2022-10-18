import React from "react";

export default class MyComp extends React.Component{
    render(){
       return(
        <div>
        Hello from My Comp--
        {this.props.val}
        </div>
       )
    }
}
