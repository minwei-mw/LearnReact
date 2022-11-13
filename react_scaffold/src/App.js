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
    const {todos} = this.state;
    const newTodo =[todoObj,...todos];
    this.setState({todos:newTodo})
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <Header addTodo={this.addTodo}/>
        <List todos={todos} />
        <Footer />
      </div>
    )
  }
}
