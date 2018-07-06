import React from 'react'
import Header from './Header'
import BrewList from './BrewList'
import NewBrewControl from './NewBrewControl'
import About from './About'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import Moment from 'moment';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      brewSuggestionList : []
    };
    this.handleAddingBrewSuggestionToUpcoming = this.handleAddingBrewSuggestionToUpcoming.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateSuggestedBrewElapsedTime(),
      60000
    );
  }

  componentWillUnmount(){
   clearInterval(this.waitTimeUpdateTimer);
 }

 componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  updateSuggestedBrewElapsedTime() {
    console.log('check');
    let newBrewSuggestionList = this.state.brewSuggestionList.slice();
    newBrewSuggestionList.forEach((suggestedBrew) =>
      suggestedBrew.formattedWaitTime = (suggestedBrew.timeOpen).fromNow(true)
    );
    this.setState({brewSuggestionList: newBrewSuggestionList})
  }

  handleAddingBrewSuggestionToUpcoming(newBrew){
    let newBrewSuggestionList = this.state.brewSuggestionList.slice();
    newSuggestedBrew.formattedWaitTime = (newSuggestedBrew.timeOpen).fromNow(true)
    newBrewSuggestionList.push(newBrew);
    this.setState({brewSuggestionList: newBrewSuggestionList});
  }

  render(){
    return (
      <div>
        <style global jsx>{`
          body {
            background-size: 85%;
            background-color: lightblue;
            background-position: center;
            background-repeat: no-repeat;
          }
          `}
        </style>
        <Header/>
        <Switch>
          <Route exact path='/' component={BrewList} />
          <Route path='/brewform' render={() =><NewBrewControl onNewBrewCreation={this.handleAddingBrewSuggestionToUpcoming} />} />
          <Route path='/upcomingbrews' render={() =><UpcomingBrews upcomingBrews={this.state.brewSuggestionList} />} />
          <Route exact path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App;
