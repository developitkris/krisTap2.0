import React from 'react'
import PropTypes from 'prop-types'

function Brew(props){
  return (
    <div>
      <h3>{props.beer}</h3>
      <ul>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
        <li>{props.abv}</li>
        <li>{props.price}</li>
        <li>{props.keg}</li>
      </ul>
      <hr/>
    </div>
  )}

Brew.proptypes = {
  beer: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  abv: PropTypes.number,
  price: PropTypes.number,
  keg: PropTypes.number
}

export default Brew
