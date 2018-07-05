import React from 'react';

function Questions(){
  return(
    <div>
      <select>What type of brew do you usually go for?
        <option>IPA</option>
        <option>Amber Ales</option>
        <option>Stout</option>
        <option>Lager</option>
        <option>Cider</option>
      </select>
      <select>Rate how strongly you feel about the brew you are about to recommend
        <option>Very, its a must have</option>
        <option>Pretty good, nothing too crazy</option>
        <option>Take it or leave it</option>
      </select>
    </div>
  );
}

export default Questions;
