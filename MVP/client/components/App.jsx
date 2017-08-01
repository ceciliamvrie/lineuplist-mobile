import React from 'react'
import * as PokeModel from '../models/pokemon.js';
import PokeWindow from './PokeWindow.jsx'
import PokeSearch from './PokeSearch.jsx'
import PokeFilters from './PokeFilters.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      filter: ''
    }
  }

  componentDidMount() {
    PokeModel.getAllPokes().then(pokemon => this.setState({pokemon: pokemon}))
  }

  onSubmit(e) {
    if (this.state.filter === 'type') {
      PokeModel.getAllPokes().then(pokes => pokes.filter(pok => pok.type.toLowerCase().includes(e)))
      .then(pokemon => this.setState({pokemon: pokemon}))
    }
    if (this.state.filter === 'rating'){
      PokeModel.getAllPokes().then(pokes => pokes.filter(pok => pok.likes.length >= e))
      .then(pokemon => this.setState({pokemon: pokemon}))
    }
    else if (this.state.filter === 'pokemon'){
      PokeModel.getAllPokes().then(pokes => pokes.filter(pok => pok.name.toLowerCase().includes(e)))
      .then(pokemon => this.setState({pokemon: pokemon}))
    }
  }

  giveALike(key) {
    console.log('our parameter', key)
    PokeModel.giveALike(key)
  }

  onClick(filter) {
    this.setState({filter: filter.target.value.toLowerCase()})
  }

  render() {
    return (
      <div>
        <h1>Welcome to Pokedex</h1>
        <PokeFilters click={this.onClick.bind(this)}/>
        <PokeSearch submit={this.onSubmit.bind(this)}/>
        <PokeWindow giveLike={this.giveALike.bind(this)} pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
