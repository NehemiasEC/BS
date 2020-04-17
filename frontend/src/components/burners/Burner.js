import React, {Component} from 'react';

class Burner extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>{this.props.item.name} {this.props.item.model} {this.props.item.min_pressure} {this.props.item.fuel_type}</li>
        );
    }
}

export default Burner;
