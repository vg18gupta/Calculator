import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  checkOperator = val => {
    return !isNaN(val);
  };

  render() {
    return( 
      <div 
        className={`button ${this.checkOperator(this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.onClick(this.props.children)}
      >
       <b> {this.props.children}</b>
      </div>
    )
  }
}

export default Button;