import React from 'react';
import Brew from './Brew';
import BrewForm from './BrewForm';
import PropTypes from 'prop-types';

// const brewSuggestionList = [
// ]

function UpcomingBrews(props){
  console.log(props.upcomingBrews);
  return(
    <div>
      <hr/>
      {props.upcomingBrews.map((brew, index) =>
        <Brew
          beer={brew.beer}
          brewery={brew.brewery}
          description={brew.description}
          key={brew.id} />
        )}
    </div>
  );
}

UpcomingBrews.propTypes = {
  upcomingBrews: PropTypes.array
};

export default UpcomingBrews;
