import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './AddListControl.scss';

class AddListControl extends Component {
    state = {
        value: ''
    }
    handleOnChange = event => {
        this.setState({ value: event.target.value });
    }
    render() { 
        return ( 
        <div className='add-list-control'>
            <input 
                type='text'
                value={this.state.value}
                onChange={this.handleOnChange}
                className='add-list-input'
            /> 
            <div>  
                <div
                    className='add-list-button'
                    onClick={() => this.props.onClick(this.state.value)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                    Añadir lista</div>
            </div>
        </div> 
        );
    }
}
 
export default AddListControl;