import { render } from "@testing-library/react";
import React from "react";

export default class Trigger extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kapuramani"
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            name: ""
        })
    }


    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.handleName} />
                {this.state.name}

                <button onClick={this.handleClick}>
                    reset name
                </button>

            </div>
        )
    }
}