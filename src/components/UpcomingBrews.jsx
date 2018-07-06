import React from 'react';
import Brew from './Brew';
import BrewForm from './BrewForm';
import PropTypes from 'prop-types';

// const brewSuggestionList = [
// ]

function UpcomingBrews(props){
  console.log(props.brewSuggestionList);
  return(
    <div>
      <hr/>
      {props.brewSuggestionList.map((suggestedBrew) =>
        <SuggestedBrew
          beer={suggestedBrew.beer}
          brewery={suggestedBrew.brewery}
          description={suggestedBrew.description}
          formattedWaitTime={suggestedBrew.formattedWaitTime}
          key={suggestedBrew.id} />
        )}
    </div>
  );
}

UpcomingBrews.propTypes = {
  upcomingBrews: PropTypes.array
};

export default UpcomingBrews;
