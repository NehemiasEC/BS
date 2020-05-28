import React, { Component } from 'react'
import {connect} from "react-redux"
import {addBurner} from "../../actions/burners"
import PropTypes from "prop-types"

class BurnerForm extends Component {
    state ={
        name:"",
        model:"",
        min_pressure:"20.2",
        fuel_type:"GAS"
    }

    static propTypes = {
        addBurner: PropTypes.func.isRequired
    }
    
    onChange = e=> this.setState({[e.target.name]:e.target.value})

    onSubmit = e => {
        e.preventDefault()
        const {name,model,min_pressure,fuel_type} =this.state
        const burner = {name,model,min_pressure,fuel_type}

        console.log(burner)
        this.props.addBurner(burner)
    }

    render() {
        const {name,model,min_pressure, fuel_type} = this.state
        return (

            <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-3">
                    <form onSubmit={this.onSubmit} className="form-inline">
                        
                            <label for="Name">Name</label>
                            <input type="text" value={name} name="name" id="name" placeholder="Name" onChange={this.onChange}/> 

                            <label for="Model">Model</label>
                            <input value={model} onChange={this.onChange} type="text"  name="model" id="model" placeholder="Model"/>   

                            <label for="min_pressure">Min Pressure</label>
                            <input value={min_pressure} onChange={this.onChange} type="text"  name="min_pressure" id="min_pressure" placeholder="min pressure"/>

                            <label for="FuelType">Fuel</label>
                            <input value={fuel_type} onChange={this.onChange} name="fuel_type" type="text"  id="Model" placeholder="Model"/>
                        
                            <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null,{addBurner})(BurnerForm);
