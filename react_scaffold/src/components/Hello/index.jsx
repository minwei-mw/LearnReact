import React, { Component } from "react";
import Welcome from "../Welcome";
import hello from "./index.module.css";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h2 className={hello.title}>Hello React</h2>
        <Welcome />
      </div>
    );
  }
}
