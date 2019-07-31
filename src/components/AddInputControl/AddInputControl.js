import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import Textarea from 'components/Textarea/Textarea'

class AddInputControl extends React.Component {
    state = {
        value: ''
    }
    render(){
        const {inputElement, onAdd, onToggle, buttonText, buttonIcon} = this.props
        return(
            <div className='add-value-control'>
                {
                    (inputElement === 'text' && <Input onUpdate={value => this.setState({value: value})} />) || 
                    (inputElement === 'textarea' && <Textarea onUpdate={value => this.setState({value: value})} />)
                }    
                <div>  
                    <Button 
                        icon={buttonIcon}
                        onClick={() => onAdd(this.state.value)}
                        text={buttonText}
                        type='primary'
                    />
                    <FontAwesomeIcon 
                        icon={faTimes}
                        onClick={onToggle} 
                    />
                </div>
            </div>
        )
    }
}

export default AddInputControl