import React from 'react'
import Poke from './Poke.jsx'

const PetWindow = (props) => (
  <div>
    { props.pokemon.map( mon => <Poke giveLike={props.giveLike} id={mon._id} url={mon.url} name={mon.name} type={mon.type} likes={mon.likes}/> )}
  </div>
);

export default PetWindow
