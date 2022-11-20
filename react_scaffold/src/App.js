import React, { Component } from "react";
import Header from './components/Header';
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [{ id: "001", name: "写代码", done: true }]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodo = [todoObj, ...todos];
    this.setState({ todos: newTodo })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodo = todos.map(v => {
      if (id === v.id) return { ...v, done }
      else return v
    })
    this.setState({ todos: newTodo })
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodo = todos.filter(v => {
      return v.id !== id;
    })
    this.setState({ todos: newTodo })
  }

  handleDoneAll = (target) => {
    const { todos } = this.state;
    const newTodo = todos.map(item => {
      return { ...item, done: target };
    })
    this.setState({ todos: newTodo })
  }

  handleDelDoneAll = () => {
    const { todos } = this.state;
    const newTodo = todos.filter((item) => {
      return item.done !== true;
    })
    this.setState({ todos: newTodo })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} handleDoneAll={this.handleDoneAll} handleDelDoneAll={this.handleDelDoneAll} />
      </div>
    )
  }
}
