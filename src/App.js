import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/CardList';

class App extends Component {
  state = {
    monsters: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState({
          monsters: users,
          searchField: ''
        })
      );
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search for monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        ></input>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
