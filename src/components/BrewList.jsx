import React from 'react';
import Brew from './Brew';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid'

const masterBrewList = [

      {
        beer: 'Ruby Zozzle',
        brewer: 'Hi-Wheel',
        description: 'Sparkling Wine & Grapefruit',
        abv: '6.8%',
        price: '7',
        keg: '20'
      },
      {
        beer: 'Tart N Juicy',
        brewer: 'Epic',
        description: 'Sour IPA',
        abv: '4.5%',
        price: '6',
        keg: '60'
      },
      {
        beer: 'Hamm\'s',
        brewer: 'Miller/Coors',
        description: 'American Lager',
        abv: '4.7%',
        price: '3',
        keg: '65'
      },
      {
        beer: 'Prismatic',
        brewer: 'Ninkasi',
        description: 'Juicy IPA',
        abv:  '5.9%',
        price: '6',
        keg: '75'
      },
      {
        beer: 'Juicy Haze',
        brewer: 'New Belgium',
        description: 'India Pale Ale',
        abv:  '7.5%',
        price: '6',
        keg: '18'
      },
      {
        beer: '8 Hop',
        brewer: 'New Belgium',
        description: 'Pale Ale',
        abv:  '5.5%',
        price: '6',
        keg: '58'
      }
]

function BrewList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.brewList).map(function(brewId) {
        let brew = props.brewList[brewId];
        return <Brew
          beer={brew.beer}
          brewer={brew.brewer}
          description={brew.description}
          abv={brew.abv}
          price={brew.price}
          keg={brew.keg}
          brewId={brew.id}
          currentRouterPath={props.currentRouterPath}
          onKegSelection={props.onKegSelection}/>
      })}
      <button class='btn btn-success' onClick={()=>{props.onKegPour(props.brewId);}}></button>
    </div>
  )}

  export default BrewList
