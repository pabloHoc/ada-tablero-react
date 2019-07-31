import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddInputControl from 'components/AddInputControl/AddInputControl'
import Button from 'components/Button/Button'
import WithToggle from 'helpers/WithToggle/WithToggle'
import './AddCardControl.scss'

const AddCardControl = ({toggleStatus, toggle, onClick}) => (
    <div className='add-card-control'>
        {
            toggleStatus ?
            <AddInputControl
                inputElement='textarea'
                onClick={onClick}
                buttonText='Añadir tarea'
                onToggle={toggle}
            />
            :
            <Button 
                text='Añadir otra tarea'
                icon={faPlus}
                onClick={toggle}
                type='link'
            />
        }
    </div>
)             

 
export default WithToggle(AddCardControl);