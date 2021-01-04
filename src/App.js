
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home'
export default class App extends Component {
  render(){
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}