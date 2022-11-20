import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img
              alt="head_portrait"
              src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
              style={{ width: "100%" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img
              alt="head_portrait"
              src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
              style={{ width: "100%" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img
              alt="head_portrait"
              src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
              style={{ width: "100%" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img
              alt="head_portrait"
              src="https://img0.baidu.com/it/u=3098099923,3369715583&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
              style={{ width: "100%" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    );
  }
}
