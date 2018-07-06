import React from 'react';
import BrewForm from './BrewForm';
import Questions from './Questions';
import PropTypes from "prop-types";

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
      currentlyVisibleContent= <BrewForm onNewBrewCreation={this.props.onNewBrewCreation}/>;
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

NewBrewControl.propTypes = {
  onNewBrewCreation: PropTypes.func
};

export default NewBrewControl;
