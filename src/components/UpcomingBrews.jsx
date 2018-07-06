import React from 'react';
import Brew from './Brew';
import PropTypes from 'prop-types';

function UpcomingBrews(props){
  return(
    <div>
      <hr/>
      {props.brewList.map((brew, index) =>
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
