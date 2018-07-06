import React from 'react'
import Header from './Header'
import BrewList from './BrewList'
import NewBrewControl from './NewBrewControl'
import About from './About'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      brewSuggestionList : []
    };
    this.handleAddingBrewSuggestionToUpcoming = this.handleAddingBrewSuggestionToUpcoming.bind(this);
  }

  handleAddingBrewSuggestionToUpcoming(newBrew){
    let newBrewSuggestionList = this.state.brewSuggestionList.slice();
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
