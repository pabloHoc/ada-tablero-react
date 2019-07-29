import React, { Component } from 'react';
import Card from 'components/Card/Card';
import AddCardControl from 'components/AddCardControl/AddCardControl';
import './List.scss';

class List extends Component {
    state = {
        cards: []
    }
    componentWillMount = () => {
        this.setState({ cards: this.props.cards });
    }
    handleCardAdded = title => {
        this.setState({ cards: [...this.state.cards, title]});
    }
    render() { 
        return (
            <div className='list'>
                <p className='title'>{this.props.title}</p>
                {this.state.cards.map((card, index) => 
                    <Card key={card} title={card}/>
                )}
                <AddCardControl onCardAdded={title => this.handleCardAdded(title)}/>
            </div>
        );
    }
}
 
export default List;