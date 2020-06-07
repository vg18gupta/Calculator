import React, { Component } from "react";
import "./Result.css";

class Input extends Component {
  render() {
    return( 
      <div className="result">
        {this.props.children}
      </div>
    )
  }
}

export default Input;