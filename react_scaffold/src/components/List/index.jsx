import React, { Component } from "react";
import Pubsub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = { pictureList: [], isFirst: true, isLoading: false, errMes: "" };

  componentDidMount() {
    this.token = Pubsub.subscribe("getSearchData", (_, stateObj) => {
      this.setState(stateObj);
    });
  };

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token);
  };

  render() {
    const { pictureList, isFirst, errMsg, isLoading } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用搜图App</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : errMsg ? (
          <h2 style={{ color: "red" }}>{errMsg}</h2>
        ) : (
          pictureList.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a
                  href="https://stock.tuchong.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="head_portrait"
                    src={item.background}
                    style={{ width: "100%" }}
                  />
                </a>
                <p className="card-text">{item.title}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
