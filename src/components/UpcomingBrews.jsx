import React from 'react';
import Brew from './Brew';
import PropTypes from 'prop-types';

const brewSuggestionList = [

]

function UpcomingBrews(props){
  return(
    <div>
      <hr/>
      {props.brewSuggestionList.map((brew, index) =>
        <Brew
          beer={brew.beer}
          brewery={brew.brewery}
          description={brew.description}
          key={index}
        )}
    </div>
  );
}

UpcomingBrews.propTypes = {
  upcomingBrews: PropTypes.array
};

export default UpcomingBrews;
