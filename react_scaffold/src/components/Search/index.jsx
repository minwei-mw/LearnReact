import React, { Component } from "react";
import axios from 'axios';

export default class Search extends Component {
  handleSearch = () => {
    const {inputRef:{value:keyword}} = this
    console.log(keyword)
    
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHup用户</h3>
        <div>
          <input ref={v => this.inputRef = v} type="text" placeholder="输入关键字点击搜索" />
          &nbsp;<button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    );
  }
}
