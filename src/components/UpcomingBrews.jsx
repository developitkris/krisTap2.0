import React from 'react';
import Brew from './Brew';
import BrewForm from './BrewForm';
import PropTypes from 'prop-types';
import SuggestedBrew from './SuggestedBrew';
// import { v4 } from 'uuid'

function UpcomingBrews(props){
  return(
    <div>
      <hr/>
      {Object.keys(props.upcomingBrews).map(function(suggestedBrewId) {
        let suggestedBrew = props.upcomingBrews[suggestedBrewId];
        return <suggestedBrew
        beer={suggestedBrew.beer}
        brewer={suggestedBrew.brewer}
        description={suggestedBrew.description}
        currentRouterPath={props.currentRouterPath}
        key={suggestedBrew.id}/>;
    })}
    </div>
  );
}

function UpcomingBrews(){
  return (
    <div>
      <hr/>
      {upcomingBrews.map((suggBrew, index) =>
      <SuggestedBrew
      beer={suggestedBrew.beer}
      brewer={suggestedBrew.brewer}
      description={suggestedBrew.description}
      key={suggestedBrew.id}/>
      )}
    </div>
  )}

UpcomingBrews.propTypes = {
  upcomingBrews: PropTypes.array
};

export default UpcomingBrews;
