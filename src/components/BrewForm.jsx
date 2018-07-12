import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function BrewForm(props){
  let _beer = null;
  let _brewer = null;
  let _description = null;

  function handleBrewFormSubmission(event) {
    event.preventDefault();
    props.onNewBrewCreation({
      beer: _beer.value,
      brewer: _brewer.value, description: _description.value, id: v4(),
      timeOpen: new Moment()});
    _beer.value='';
    _brewer.value='';
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
          id='brewer'
          placeholder='Brewer name: '
          ref={(input) => {_brewer = input;}}
          required/>
        <hr></hr>
        <textarea
          rows="4"
          cols="50"
          type='text'
          id='description'
          placeholder='Tell us why you are suggesting this to us.'
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
