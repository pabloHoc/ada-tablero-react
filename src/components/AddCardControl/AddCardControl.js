import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddCardControl.scss';

class AddCardControl extends Component {
    state = {
        value: ''
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
    }
    render() { 
        return (
            <div className='add-card-control'>
                <div className='add-card-form'>
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                        className='card-title-input' 
                        placeholder='Introduzca un título para esta tarjeta'/>
                    <div>
                        <div 
                            className='add-card-button'
                            onClick={() => this.props.onCardAdded(this.state.value)}
                        >
                            Añadir tarjeta</div>
                            {/* <FontAwesomeIcon icon={faTimes} /> */}
                    </div>
                </div>
                {/* <p className='add-card'><FontAwesomeIcon icon={faPlus} />Añadir una tarjeta</p> */}
            </div>
        );
    }
}
 
export default AddCardControl;