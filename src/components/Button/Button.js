import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'

const Button = ({text, icon, onClick, type}) => (
    <div
        className={`button ${type}`}
        onClick={onClick}
    >
        {icon && <FontAwesomeIcon icon={icon} />}
        {text}
    </div>
) 

export default Button