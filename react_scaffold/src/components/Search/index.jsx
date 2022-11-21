import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  handleSearch = () => {
    const {
      inputRef: { value: keyword },
    } = this;
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`/api/search/topic?goods_type=0&term=${keyword}`).then(
      (response) => {
        const { hits } = response.data.data;
        this.props.updateAppState({
          isFirst: false,
          isLoading: false,
          pictureList: hits,
        });
      },
      (error) => {
        console.log("失败了", error);
        this.props.updateAppState({
          isFirst: false,
          isLoading: false,
          errMsg: "请求失败了！",
        });
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
