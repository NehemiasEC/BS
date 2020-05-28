import React, { Component } from 'react'
import {Fragment} from "react"
import {Button} from "@material-ui/core";
import main from "../scss/main.scss";
import {Provider as AlertProvider, positions} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import {Provider} from 'react-redux'
import store from './store'


import Header from "./components/layout/Header"
import BurnerForm from "./components/burners/BurnerForm"

import Burner from "./components/burners/Burner";

//alert
import Alert from "./components/layout/Alert"


const alertOptions = {
    timeout:9000,
    position:positions.BOTTOM_RIGHT
}
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header></Header>
                        <BurnerForm/>
                        <Burner/>
                        <Alert/>
                    </Fragment>  
                </AlertProvider>
            </Provider>
        )
    }
}
