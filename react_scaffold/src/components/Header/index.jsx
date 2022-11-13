import React, { Component } from "react";
import { nanoid } from "nanoid";
import { isNull } from "../../utils/Common";

import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的内容，按回车键确认"
          onKeyUp={this.handleSubmit}
        ></input>
      </div>
    );
  }
  handleSubmit = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (isNull(target.value.trim())) {
      alert("请输入有效的内容！");
      return;
    }
    this.props.addTodo({ id: nanoid(), name: target.value, done: false });
    target.value = null;
  };
}
