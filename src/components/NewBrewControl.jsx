import React from 'react';
import BrewForm from './BrewForm';
import Questions from './Questions';

class NewBrewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handlePreFormScreening = this.handlePreFormScreening.bind(this)
  }

  handlePreFormScreening(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent= <BrewForm />;
    } else {
      currentlyVisibleContent= <Questions onPreFormScreening={this.handlePreFormScreening}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewBrewControl;
