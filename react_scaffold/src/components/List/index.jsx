import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { pictureList } = this.props;
    return (
      <div className="row">
        {pictureList.map((item) => {
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
        })}
      </div>
    );
  }
}
