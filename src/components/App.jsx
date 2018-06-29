import React from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import BrewList from './BrewList'
import BrewForm from './BrewForm'
import About from './About'

function App(){
  return (
    <div>
      <style global jsx>{`
        body {
          background-size: 85%;
          background-color: navy;
          background-position: center;
          background-repeat: no-repeat;
        }
        `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/brewform' component={BrewForm} />
        <Route exact path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App
