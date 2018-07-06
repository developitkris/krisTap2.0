import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function BrewForm(props){
  let _beer = null;
  let _brewery = null;
  let _description = null;

  function handleBrewFormSubmission(event) {
    event.preventDefault();
    props.onNewBrewCreation({beer: _beer.value, brewery: _brewery.value, description: _description.value, id: v4()});
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
      <br></br>
      <br></br>
      <h3>You are about to make an awesome brew suggestion. Good thinking</h3>
      <form onSubmit={handleBrewFormSubmission} className='form'>
        <br></br>
        <br></br>
        <input
          type='text'
          id='beer'
          placeholder='Beer name: '
          ref={(input) => {_beer = input;}}
          required/>
        <hr></hr>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery name: '
          ref={(input) => {_brewery = input;}}
          required/>
        <hr></hr>
        <textarea
          rows="4"
          cols="50"
          type='text'
          id='description'
          placeholder='Tell us why you want to suggest this beer to us.'
          ref={(input) => {_description = input;}}
          required/>
        <hr></hr>
        <button className='btn btn-lg btn-block btn-info btn-outline-secondary' type='submit'>Suggest!</button>
      </form>
    </div>

  )
}

BrewForm.propTypes = {
  onNewBrewCreation: PropTypes.func
};

export default BrewForm;
