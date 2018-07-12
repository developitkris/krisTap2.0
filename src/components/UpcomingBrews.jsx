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
      {Object.keys(props.suggestedList).map(function(suggbrewId) {
        let suggbrew = props.suggestedList[suggbrewId];
        return <suggbrew
        beer={suggbrew.beer}
        brewer={suggbrew.brewer}
        description={suggbrew.description}
        currentRouterPath={props.currentRouterPath}
        key={suggbrew.id}
        onBrewSelection={props.onBrewSelection}/>;
    })}
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
