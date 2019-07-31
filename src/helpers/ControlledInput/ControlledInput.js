import React, { Component } from 'react'

const controlledInput = PassedComponent => {
    return class ControlledInput extends Component {
        state = {
            value: ''
        }
        handleOnChange = event => {
            this.setState({ value: event.target.value });
        }
        render(){
            return (
                <PassedComponent 
                    {...this.props}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                />
            )
        }
    }
}

export default controlledInput;