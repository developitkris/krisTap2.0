import React from 'react'
import PropTypes from 'prop-types'

function Brew(props){
  return (
    <div onClick={() => {props.onKegSelection(props.brewId);}}>
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

Brew.propTypes = {
  beer: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  abv: PropTypes.number,
  price: PropTypes.number,
  keg: PropTypes.number,
  brewId: PropTypes.string.isRequired
}

export default Brew;
