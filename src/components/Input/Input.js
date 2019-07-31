import React from 'react'
import ControlledInput from 'helpers/ControlledInput/ControlledInput'
import './Input.scss'

const Input = ({value, onChange, onUpdate}) => (
    <input 
        type='text'
        value={value}
        onChange={e => {
            onChange(e)
            onUpdate(value)
        }}
        className='input'
    />
)

export default ControlledInput(Input)