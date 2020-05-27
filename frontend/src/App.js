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



    loadAPI() {
        const url = "http://127.0.0.1:8000/api/burners/";
        axios.get(url).then(response =>{this.setState({
            burners:response.data
        })})
    }



    componentDidMount() {
       this.loadAPI();
        console.log(this.state.burners)
    }


    handleClick(e){
        e.preventDefault();
        console.log(e.target)
    }

    render() {
        return (
            <Fragment>
                <Header></Header>
                <h1>hello world app</h1>

                <Button color="primary" variant="contained" onClick={this.handleClick.bind(this)}>Press</Button>
                {console.log(this.state.burners)}
                <ul>
                    {
                        this.state.burners.map(item=>{
                            return <Burner item={item}/>
                        })
                    }
                </ul>
                <BurnerCard/>
                <BurnerCard/>

            </Fragment>
        )
    }
}
