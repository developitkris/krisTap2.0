import React from 'react'
import Header from './Header'
import BrewList from './BrewList'
import NewBrewControl from './NewBrewControl'
import UpcomingBrews from './UpcomingBrews'
import About from './About'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import Moment from 'moment';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      brewSuggestionList : {
        'UNIQUE-ID' : {
          beer: '',
          brewery: '',
          formattedWaitTime: '',
          timeOpen: Moment {}
        }
      }
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
    let newBrewSuggestionList = Object.assign({}, this.state.brewSuggestionList);
    Object.keys(newBrewSuggestionList).forEach(suggbrewId => {
      newBrewSuggestionList[suggbrewId].formattedWaitTime = (newBrewSuggestionList[suggbrewId].timeOpen).fromNow(true);
    });
      this.setState({brewSuggestionList: newBrewSuggestionList});
    }

  handleAddingBrewSuggestionToUpcoming(newBrew){
    let newBrewSuggestionList = Object.assign({},  this.state.brewSuggestionList, {[newBrew.id]: newBrew}
    });
    newBrewSuggestionList[newBrew.id].formattedWaitTime = newBrewSuggestionList[newBrew.id].timeOpen.fromNow(true);
    this.setState({brewSuggestionList: newBrewSuggestionList});
  }

  handleChangingOutKeg(brewId){
    this.setState({selectedKeg: brewId});
  }

  render(){
    let bkgrd= require('./../assets/images/homepage.jpg')
    return (
      <div className='homeImg'>
        <div className='background-image' style={{backgroundImage: "url("+bkgrd+")"}}></div>

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
          <Route exact path='/' render={(props)=><Admin brewList={this.state.masterBrewList} currentRouterPath={props.location.pathname}
            onKegPour={this.handleChangingOutKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route path='/admin' render={(props)=><Admin brewList={this.state.masterBrewList} currentRouterPath={props.location.pathname}
            onKegSelection={this.handleChangingOutKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route path='/brewform' render={() =><NewBrewControl onNewBrewCreation={this.handleAddingBrewSuggestionToUpcoming} />} />
          <Route exact path='/upcomingbrews' render={()=><UpcomingBrews upcomingBrews={this.state.brewSuggestionList} />} />
          <Route exact path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
    )
  }
}

export default App;
