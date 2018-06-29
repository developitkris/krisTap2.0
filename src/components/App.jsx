import React from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import BrewList from './BrewList'
import About from './About'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App
