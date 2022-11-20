import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleDoneAll = (event) => {
    this.props.handleDoneAll(event.target.checked);
  };

  handleDelDoneAll = () => {
    if (window.confirm("确定要清除所有已完成的吗？"))
      this.props.handleDelDoneAll();
  };

  render() {
    const { todos } = this.props;
    const todoLen = todos.length;
    const doneCount = todos.reduce((pue, todo) => pue + (todo.done ? 1 : 0), 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === todoLen && todoLen > 0 ? true : false}
            onChange={this.handleDoneAll}
          />
        </label>
        <span>
          已完成
          <span>{doneCount}</span>/ 全部
          <span>{todoLen}</span>
        </span>
        <button className="btn btn-danger" onClick={this.handleDelDoneAll}>
          清除已完成
        </button>
      </div>
    );
  }
}
