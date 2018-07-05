import React from 'react'
import Header from './Header'

function BrewForm(){
  let _beer = null;
  let _brewery = null;
  let _description = null;

  function handleBrewFormSubmission(event) {
    event.preventDefault();
    console.log(_beer.value);
    console.log(_brewery.value);
    console.log(_description.value);
    _beer.value='';
    _brewery.value='';
    _description.value='';
  }

  return (
    <div>
    <style jsx>{`
    input {
      padding: 2px;
      margin-right: 10px;
      margin-left: 5px;
      font-size: 12pt;
    }
    button:hover {
      color: grey;
    }
    button {
      padding: 2px;
      margin-left: 1px;
      border: solid .5px blue;
    }
  `}</style>
      <h3>You are about to make an awesome brew suggestion. Good thinking</h3>
      <form onSubmit={handleBrewFormSubmission} className='form'>
        <input
          type='text'
          id='beer'
          placeholder='Beer name: '
          ref={(input) => {_beer = input;}}
          required/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery name: '
          ref={(input) => {_brewery = input;}}
          required/>
        <textbox
          type='text'
          id='description'
          placeholder='Tell us why you want to suggest this beer to us.'
          ref={(input) => {_description = input;}}
          required/>
        <button className='btn btn-lg btn-success' type='submit'>Suggest!</button>
      </form>
    </div>

  )
}

export default BrewForm;
