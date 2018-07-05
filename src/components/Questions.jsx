import React from 'react';
import PropTypes from 'prop-types';

function Questions(props){
  return(
    <div>
      <select required>What type of brew do you usually go for?
        <option>IPA</option>
        <option>Amber Ales</option>
        <option>Stout</option>
        <option>Lager</option>
        <option>Cider</option>
      </select>
      <select required>Rate how strongly you feel about the brew you are about to recommend
        <option>Very, its a must have</option>
        <option>Pretty good, nothing too crazy</option>
        <option>Take it or leave it</option>
      </select>
      <p>Ready to make your suggestion?</p>
      <button onClick={props.onPreFormScreening}>Let's do this!</button>
    </div>
  );
}

Questions.proptypes={
  onPreFormScreening: PropTypes.func
};

export default Questions;
