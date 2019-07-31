import React, { Component } from 'react';
import List from 'components/List/List';
import './Dashboard.scss';
import AddListControl from 'components/AddListControl/AddListControl';


class Dashboard extends Component {
    state = {
        lists: []
    }
    handleOnChange = event => {
        this.setState({ value: event.target.value });
    }
    addList = title => {
        const newList = { title: title, cards: [] }
        this.setState({ lists: [...this.state.lists, newList] });
    }
    render() { 
        return (
            <main className='dashboard'>
                {this.state.lists.map((list, index) => 
                    <List
                        key={list.title} 
                        title={list.title} 
                        cards={list.cards} 
                        />
                )}
                <AddListControl onClick={this.addList} />
            </main>
        );
    }
}
 
export default Dashboard;