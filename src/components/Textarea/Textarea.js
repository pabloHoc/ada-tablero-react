import React from 'react'
import ControlledInput from 'helpers/ControlledInput/ControlledInput'
import './Textarea.scss'

const Textarea = ({value, onChange, onUpdate}) => (
    <textarea 
        value={value}
        onChange={e => {
            onChange(e)
            onUpdate(value)
        }}        
        className='textarea'
    />
)

export default ControlledInput(Textarea)