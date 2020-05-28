import React, { Component } from 'react'
import {Fragment} from "react"
import {Button} from "@material-ui/core";
import main from "../scss/main.scss";
import axios from "axios";

import {Provider} from 'react-redux'
import store from './store'


import Header from "./components/layout/Header"

import Burner from "./components/burners/Burner";
import BurnerCard from "./components/burners/BurnerCard";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header></Header>
                    <Burner/>
                </Fragment>  
            </Provider>
        )
    }
}
