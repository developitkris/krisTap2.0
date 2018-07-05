import React from 'react';
import Brew from './Brew';

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

function BrewList(){
  return (
    <div>
      <hr/>
      {masterBrewList}.map((beerName, brewer, description, abv, price, keg) =>
      <Beer beerName={beer.beerName}
      brewer={beer.brewer}
      description={beer.description}
      abv={beer.abv}
      price={beer.price}
      keg={beer.keg}
      key={index}/>
    )
    </div>
  )}

  export default BrewList
