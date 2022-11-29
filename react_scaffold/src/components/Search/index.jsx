import React, { Component } from "react";
import Pubsub from "pubsub-js";

export default class Search extends Component {
  handleSearch = async () => {
    const {
      inputRef: { value: keyword },
    } = this;
    Pubsub.publish("getSearchData", { isFirst: false, isLoading: true });

    // fetch发送网络请求 （未优化）
    /*  fetch(`/api/search/topic?goods_type=0&term=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { hits } = response.data;
        Pubsub.publish("getSearchData", {
          isFirst: false,
          isLoading: false,
          pictureList: hits,
        });
      })
      .catch((error) => {
        console.log("获取数据失败", error);
        Pubsub.publish("getSearchData", {
          isFirst: false,
          isLoading: false,
          errMsg: "请求失败了！",
        });
      }); */

    // fetch发送网络请求 （未优化）
    try {
      const response = await fetch(
        `/api/search/topic?goods_type=0&term=${keyword}`
      );
      const data = await response.json();
      const { hits } = data.data;
      Pubsub.publish("getSearchData", {
        isFirst: false,
        isLoading: false,
        pictureList: hits,
      });
    } catch (error) {
      console.log("获取数据失败", error);
      Pubsub.publish("getSearchData", {
        isFirst: false,
        isLoading: false,
        errMsg: "请求失败了！",
      });
    }
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
