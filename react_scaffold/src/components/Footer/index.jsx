import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          已完成
          <span></span>/ 全部
          <span></span>
        </span>
        <button className="btn btn-danger">清除已完成</button>
      </div>
    );
  }
}
