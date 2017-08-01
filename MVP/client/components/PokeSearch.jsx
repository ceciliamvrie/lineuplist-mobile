import React from 'react'

const PokeSearch = (props) => (
  <form>
    <input type="text" name="username" id="input" onChange={(e) => props.submit(e.target.value)}/>
    <button type="submit">Search</button>
  </form>
);

export default PokeSearch
