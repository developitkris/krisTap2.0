import React from 'react';
import BrewForm from './BrewForm'

class NewBrewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return(
      <div>
        <p>This is the NewBrewControl component</p>
      </div>
    )
  }
}

export default NewBrewControl;
