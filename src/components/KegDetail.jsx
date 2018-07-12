import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedKeg.beer} - {props.selectedKeg.keg}</h1>
      <h3 onClick={()=> {props.onKegPour(props.brewId);}}>
        {props.selectedKeg.timesTapped}</h3>
      <hr/>
    </div>
  );
}

KegDetail.propTypes={
  beer: PropTypes.string,
  keg: PropTypes.number,
  timesTapped: PropTypes.number
}

export default KegDetail;
