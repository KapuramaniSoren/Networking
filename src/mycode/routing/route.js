import React from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="/one">Home</Link>
                    <Link to="two">HOME2</Link>
                    <Link to="three">HOME3</Link>


                    <Routes exact path="/one" component={<Comp1/>} />
                    <Routes exact path="/two" component={<Comp2/>} />
                    <Routes exact path="/three" component={<Comp3/>} />
                </BrowserRouter>
                <div style={{ backgroundColor: "gray", padding: 20 }}>
                    this is footer
                </div>
              
            </div>
        )
    }
}