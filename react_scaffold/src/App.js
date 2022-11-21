import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = { pictureList: [], isFirst: true, isLoading: false, errMes: "" };

  updateAppState = (params) => {
    this.setState(params);
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List  {...this.state}/>
      </div>
    )
  }
}
