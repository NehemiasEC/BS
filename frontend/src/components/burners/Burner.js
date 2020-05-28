import React, {Component, Fragment} from 'react';
import Table from "@material-ui/core/Table"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getBurners,deleteBurner} from "../../actions/burners"

class Burner extends Component {

    static propTypes = {
        burners:PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getBurners()
    }

    render() {
        return (
            <Fragment>
                <h1>Burners</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Min Pressure</th>
                            <th>Fuel Type</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.burners.map(burner=>(
                            <tr key={burner.id}>
                                <td>{burner.id}</td>
                                <td>{burner.name}</td>
                                <td>{burner.model}</td>
                                <td>{burner.min_pressure}</td>
                                <td>{burner.fuel_type}</td>
                                <td><button onClick={this.props.deleteBurner.bind(this,burner.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>

        );
    }
}

const mapStateToProps = state =>({
    burners:state.burners.burners
})

export default connect(mapStateToProps,{getBurners,deleteBurner})(Burner);
