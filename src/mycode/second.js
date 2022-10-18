import React from "react";

export default class Second extends React.Component{
    constructor(props){
        super(props);

        this.state={
            a:0
        }
    }
    componentDidMount(){
        console.log("Hii from comp did mount")
    }
    componentDidUpdate(){
        console.log("Hello from comp did update")
    }
    componentWillUnmount(){
        console.log("hii from comp will unmount")
    }
    render(){
        console.log("hi from render");
        return(
           
            <div>
                Hello from second Component
                <input
                onChange={(e)=>{
                    this.setState({
                        a:e.target.value
                    })
                }}/>
            </div>
        )
    }
}