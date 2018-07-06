import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment';

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
      <h5>{displayTimeOpen(props.timeOpen)} ago</h5>
      <hr/>
    </div>
  )}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Brew.proptypes = {
  beer: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  abv: PropTypes.number,
  price: PropTypes.number,
  keg: PropTypes.number,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
}

export default Brew
