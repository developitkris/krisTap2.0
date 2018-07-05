import React from 'react'
import Header from './Header'

function BrewForm(){
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
      <form className='form'>
        <input
          type='text'
          placeholder='Beer name: ' required/>
        <input
          type='text'
          placeholder='Brewery name: ' required/>
        <textbox
          type='text'
          placeholder='Tell us why you want to suggest this beer to us.' required/>
        <button className='btn btn-lg btn-success' type='submit'>Suggest!</button>
      </form>
    </div>

  )
}

export default BrewForm;
