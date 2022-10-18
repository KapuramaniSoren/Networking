import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

export default class ArraysProject extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks_arr: [],
            task_input: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            task_input: e.target.value
        })
    }

    pushTask = () => {
        var temp = this.state.tasks_arr
        temp.push(this.state.task_input)
        this.setState({
            tasks_arr: temp
        })

    }

    handleComplete = (index) => {
        var temp = this.state.tasks_arr
        temp.splice(index, 1)
        this.setState({
            tasks_arr: temp
        })
    }
    render() {
        return (
            <div>
                <input
                    value={this.state.task_input}
                    onChange={this.handleInput}
                />
                <button
                    disabled={this.state.task_input === "" ? true : false}
                    onClick={this.pushTask}
                >
                    Add task
                </button>
                {this.state.tasks_arr.length === 0 ?
                    <h1>You have no tasks in your list</h1>
                    :


                    <h1>
                        Tasks to do
                    </h1>
    }
                    < div
                    style={{
                        backgroundColor: "#4F6FB9",
                        padding: 20,
                        borderRadius: 10,
                        width: 200

                    }}
                
                >
                    <ol>
                        {this.state.tasks_arr.map((single, index) => {
                            return (
                                <li>
                                    {single}
                                    <button
                                        onClick={(e) => {
                                            this.handleComplete(index)
                                        }}
                                    >
                                        completed
                                    </button>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}