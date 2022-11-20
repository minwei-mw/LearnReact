import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = { pictureList: [] }

  getPictureList = (params) => {
    this.setState({ pictureList: params })
  }

  render() {
    return (
      <div className="container">
        <Search getPictureList={this.getPictureList}/>
        <List pictureList={this.state.pictureList}/>
      </div>
    )
  }
}
