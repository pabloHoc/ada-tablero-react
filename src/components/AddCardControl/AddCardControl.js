import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import WithToggle from 'helpers/WithToggle/WithToggle'
import ControlledInput from 'helpers/ControlledInput/ControlledInput'
import './AddCardControl.scss'

const AddCardControl = ({toggleStatus, toggle, value, onChange, onCardAdded}) => (
    <div className='add-card-control'>
        {
            toggleStatus ?
            <div className='add-card-form'>
                <textarea
                    value={value}
                    onChange={onChange}
                    className='card-title-input' 
                    placeholder='Introduzca un título para esta tarjeta'/>
                <div>
                    <div 
                        className='add-card-button'
                        onClick={() => onCardAdded(value)}
                    >
                        Añadir tarjeta</div>
                        <FontAwesomeIcon 
                            icon={faTimes}
                            onClick={toggle} 
                            />
                </div>
            </div>
            :
            <p 
                className='add-card'
                onClick={toggle}
            >
                <FontAwesomeIcon icon={faPlus} />
                Añadir una tarjeta
            </p> 
        }
    </div>
);
 
export default ControlledInput(WithToggle(AddCardControl));