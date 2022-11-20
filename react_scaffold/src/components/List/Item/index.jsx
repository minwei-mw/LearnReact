import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Item/index.css";

export default class Item extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  };
  state = { isFlag: false };

  handleHover = (flag) => {
    return () => {
      this.setState({ isFlag: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDel = (id) => {
    return () => {
      if (window.confirm("确认要删除吗？")) this.props.deleteTodo(id);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { isFlag } = this.state;
    return (
      <li
        onMouseOver={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}
        style={{ background: isFlag ? "#ddd" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: isFlag ? "block" : "none" }}
          onClick={this.handleDel(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
