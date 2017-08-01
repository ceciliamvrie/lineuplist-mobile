import React from 'react'

const PokeFilters = (props) => (
  <div>
   <h2>Search Filters</h2>
   <input id="type" onClick={props.click.bind(this)} value="Type"/>
   <input id="pokemon" onClick={props.click.bind(this)} value="Pokemon"/>
   <input id="rating" onClick={props.click.bind(this)} value="Rating"/>
  </div>
)

export default PokeFilters
