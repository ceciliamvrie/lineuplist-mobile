import React from 'react'

const Poke = (props) => (
  <div>
    <h3>{props.name}</h3>
    <img src={props.url}/>
    <h4>Type: {props.type}</h4>
    <h4>Likes: {props.likes.length} <span><button onClick={props.giveLike.bind(this, props.name)}>Like</button></span></h4>
  </div>
)

export default Poke
