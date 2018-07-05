import React from 'react';
import BrewForm from './BrewForm'

class NewBrewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
      this.handleClick = this.handleClick.bind(this);
    };
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('You are about to make an awesome brew suggestion. Good thinking.');
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    return(
      <div>
        <p>This is the NewBrewControl component</p>
        <strong onClick={this.handleClick}>Click here to make a suggestion for a new brew!</strong>
      </div>
    )
  }
}

export default NewBrewControl;
