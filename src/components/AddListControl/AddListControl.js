import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button/Button'
import AddInputControl from 'components/AddInputControl/AddInputControl'
import WithToggle from 'helpers/WithToggle/WithToggle'
import './AddListControl.scss'

const AddListControl = ({toggleStatus, toggle, onClick}) => (
    <div className='add-list-control'>
        {
            toggleStatus ?
            <AddInputControl
                inputElement='text'
                onAdd={onClick}
                buttonText='Añadir lista'
                buttonIcon={faPlus}
                onToggle={toggle}
            />
            :
            <Button 
                text='Añadir otra lista'
                icon={faPlus}
                onClick={toggle}
                type='primary'
            />
        }
    </div>             
);
 
export default WithToggle(AddListControl);