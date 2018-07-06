import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment';

function SuggestedBrew(props){
  return (
    <div>
      <h3>{props.beer}</h3>
      <ul>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
      </ul>
      <h5>Suggested{displayTimeOpen(props.timeOpen)} ago</h5>
      <hr/>
    </div>
  )}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

SuggestedBrew.proptypes = {
  beer: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  timeOpen: PropTypes.instanceOf(Moment).isRequired
}

export default SuggestedBrew;
