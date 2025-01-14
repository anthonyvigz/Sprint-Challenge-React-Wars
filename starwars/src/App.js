import React, { Component } from 'react';
import './App.css';
import CharactersList from './components/CharactersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  showHomeworld = event => {
    event.preventDefault();
    const starwarsChars = this.state.starwarsChars;
    starwarsChars.map( char => {
      return char.isclicked = false;
    })
    this.setState( { starwarsChars } )
    console.log(this.state.starwarsChars.isclicked)

  }

  render() {
    console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharactersList charlist={this.state} homeworld={this.showHomeworld} />
      </div>
    );
  }
}

export default App;
