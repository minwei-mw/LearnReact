import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  handleSearch = () => {
    const {
      inputRef: { value: keyword },
    } = this;
    axios.get(`/api/search/topic?goods_type=0ççç&term=${keyword}`).then(
      (response) => {
        const { hits } = response.data.data;
        this.props.getPictureList(hits);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };

  handleKeyup = (event) => {
    const { keyCode } = event;
    if (keyCode !== 13) return;
    this.handleSearch();
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索图片</h3>
        <div>
          <input
            ref={(v) => (this.inputRef = v)}
            type="text"
            placeholder="输入关键字点击搜索"
            onKeyUp={this.handleKeyup}
          />
          &nbsp;
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    );
  }
}
