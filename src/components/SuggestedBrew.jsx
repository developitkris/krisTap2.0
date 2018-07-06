import React from 'react'
import PropTypes from 'prop-types'

function SuggestedBrew(props){
  return (
    <div>
      <h3>{props.beer}</h3>
      <ul>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
      </ul>
      <h5>Suggested{props.formattedWaitTime} ago</h5>
      <hr/>
    </div>
  );
}

SuggestedBrew.propTypes = {
  beer: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  formattedWaitTime: PropTypes.string.isRequired
};

export default SuggestedBrew;
