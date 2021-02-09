import Select from 'react-select';
import React, { Component } from 'react'



export class Selector extends Component {
    handleChange = (event) =>{
        this.props.onValueChange(event.value)
    }
    render() {
        return (
            <>
        <Select onChange={this.handleChange} options={this.props.categories} />
            </>
        );
    }
}
