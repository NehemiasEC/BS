import React, { Component } from 'react'
import {Fragment} from "react"
import logo from "./logo.png"
import {Button} from "@material-ui/core";
import main from "../scss/main.scss";
import axios from "axios";

import Header from "./components/layout/Header"

import Burner from "./components/burners/Burner";
import BurnerCard from "./components/burners/BurnerCard";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            burners:[]
        };

    };

    render() {
        return (
            <Fragment>
                <Header></Header>
            </Fragment>
        )
    }
}
