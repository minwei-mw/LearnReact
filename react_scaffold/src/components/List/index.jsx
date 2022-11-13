import React, { Component } from 'react'
import Item from "./Item"

import "./index.css"

export default class List extends Component {
  render() {
    return (
     <ul className='tode-list'>
        <Item></Item>
     </ul>
    )
  }
}
