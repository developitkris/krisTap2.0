import React from 'react';
import BrewForm from './BrewForm';
import Questions from './Questions';

class NewBrewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('You are about to make an awesome brew suggestion. Good thinking.');
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent= <BrewForm />;
    } else {
      currentlyVisibleContent= <Questions />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewBrewControl;
