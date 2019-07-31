import React, { Component } from 'react'
import uuid from 'uuid/v4'
import Card from 'components/Card/Card'
import AddCardControl from 'components/AddCardControl/AddCardControl'
import './List.scss'

class List extends Component {
    state = {
        cards: []
    }
    componentWillMount = () => {
        this.setState({ cards: this.props.cards })
    }
    handleCardAdded = title => {
        this.setState({ cards: [...this.state.cards, {
            title: title,
            id: uuid()
        }]})
    }
    render() { 
        return (
            <div className='list'>
                <p className='title'>{this.props.title}</p>
                {this.state.cards.map(card => 
                    <Card key={card.id} title={card}/>
                )}
                <div className='add-card-control'>
                    <AddCardControl onCardAdded={title => this.handleCardAdded(title)}/>
                </div>
            </div>
        );
    }
}
 
export default List;