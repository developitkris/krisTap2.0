import React from 'react';
import Brew from './Brew';
import BrewForm from './BrewForm';
import PropTypes from 'prop-types';
import SuggestedBrew from './SuggestedBrew';
// import { v4 } from 'uuid'

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

function UpcomingBrews(){
  return (
    <div>
      <hr/>
      {brewSuggestionList.map((suggBrew, index) =>
      <SuggestedBrew
      beer={suggestedBrew.beer}
      brewer={suggestedBrew.brewer}
      description={suggestedBrew.description}
      key={index}/>
      )}
    </div>
  )}

UpcomingBrews.propTypes = {
  upcomingBrews: PropTypes.array
};

export default UpcomingBrews;
