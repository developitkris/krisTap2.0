import React from 'react'
import Header from './Header'
import BrewList from './BrewList'
import NewBrewControl from './NewBrewControl'
import About from './About'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'

function App(){
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
        <Route exact path='/brewsuggestion' component={NewBrewControl} />
        <Route exact path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App;
