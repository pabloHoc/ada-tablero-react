import React, { Component } from 'react'
import uuid from 'uuid/v4'
import List from 'components/List/List'
import AddInputControl from 'components/AddInputControl/AddInputControl'
import './Dashboard.scss'

class Dashboard extends Component {
    state = {
        lists: []
    }
    handleOnChange = event => {
        this.setState({ value: event.target.value })
    }
    addList = title => {
        const newList = { 
            id: uuid(), 
            title: title, 
            cards: [] 
        }
        this.setState({ lists: [...this.state.lists, newList] });
    }
    render() { 
        return (
            <main className='dashboard'>
                {this.state.lists.map(list => 
                    <List
                        key={list.id} 
                        title={list.title} 
                        cards={list.cards} 
                    />
                )}
                <AddInputControl onClick={this.addList} />
            </main>
        );
    }
}
 
export default Dashboard