import React from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/list' component={List} />
        <Route component={Error404} />
      </Switch>
      <h1>React -1st project</h1>
      <h5>Friday</h5>
      <p><em>list</em></p>
    </div>
  )
}

export default App
