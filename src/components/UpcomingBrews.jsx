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
      {props.upcomingBrews.map((suggestedBrew) =>
        <SuggestedBrew
          beer={suggestedBrew.beer}
          brewery={suggestedBrew.brewery}
          description={suggestedBrew.description}
          timeOpen={suggestedBrew.timeOpen}
          key={suggestedBrew.id} />
        )}
    </div>
  );
}

UpcomingBrews.propTypes = {
  upcomingBrews: PropTypes.array
};

export default UpcomingBrews;
