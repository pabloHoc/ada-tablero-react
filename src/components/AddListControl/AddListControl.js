import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import WithToggle from 'helpers/WithToggle/WithToggle'
import ControlledInput from 'helpers/ControlledInput/ControlledInput'
import './AddListControl.scss'

const AddListControl = ({toggleStatus, toggle, value, onChange, onClick}) => (
    <>
        {
            toggleStatus ?
            <div className='add-list-control'>
                <input 
                    type='text'
                    value={value}
                    onChange={onChange}
                    className='add-list-input'
                /> 
                <div>  
                    <div
                        className='add-list-button'
                        onClick={() => onClick(value)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        Añadir lista
                    </div>
                    <FontAwesomeIcon 
                        icon={faTimes}
                        onClick={toggle} 
                    />
                </div>
            </div>
            :
            <div
                className='show-add-list-button'
                onClick={toggle}
            >
                <FontAwesomeIcon icon={faPlus} />
                Añadir otra lista
            </div>
        }
    </>             
    );
 
export default ControlledInput(WithToggle(AddListControl));