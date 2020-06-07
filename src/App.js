import React, { Component } from "react";
import "./App.css";
import Button from "./components/buttonComponent";
import Input from "./components/resultComponent";
import ClearButton from "./components/handleClear";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      prev: "",
      cur: "",
      operator: ""
    };
  }

  numbers = val => {
    this.setState({ result: this.state.result + val });
  };

  decimal = val => {
    if (this.state.result.indexOf(".") === -1) {//this is to check there is any decimal already present the result box.
      this.setState({ result: this.state.result + val });
    }
  };


  clear = () => {
    this.setState({ result: "" });
  };
  // in this functions add substract multiply and divide I have set the operator state as per the requirement
  add = () => { //function to add two numbers
    this.state.prev = this.state.result;
    this.setState({ result: "" });
    this.state.operator = "plus";
  };

  subtract = () => { //function to substract two numbers
    this.state.prev = this.state.result;
    this.setState({ result: "" });
    this.state.operator = "subtract";
  };
  
  multiply = () => {  //function to multiply two numbers
    this.state.prev = this.state.result;
    this.setState({ result: "" });
    this.state.operator = "multiply";
  };

  divide = () => {   //function to divide two numbers
    this.state.prev = this.state.result;
    this.setState({ result: "" });
    this.state.operator = "divide";
  };

  calculate = () => {
    this.state.cur = this.state.result;

    if (this.state.operator == "plus") {
      this.setState({
        result:
          parseInt(this.state.prev) +
          parseInt(this.state.cur)
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        result:
          parseInt(this.state.prev) -
          parseInt(this.state.cur)
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        result:
          parseInt(this.state.prev) *
          parseInt(this.state.cur)
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        result:
          parseInt(this.state.prev) /
          parseInt(this.state.cur)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calculator-body">
          <div className="row">
            <Input>{this.state.result}</Input>
          </div>
          <br />
          <div className="row">
            <Button onClick={this.numbers}>7</Button>
            <Button onClick={this.numbers}>8</Button>
            <Button onClick={this.numbers}>9</Button>
            <Button onClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button onClick={this.numbers}>4</Button>
            <Button onClick={this.numbers}>5</Button>
            <Button onClick={this.numbers}>6</Button>
            <Button onClick={this.add}>+</Button>
            
          </div>
          <div className="row">
            <Button onClick={this.numbers}>1</Button>
            <Button onClick={this.numbers}>2</Button>
            <Button onClick={this.numbers}>3</Button>
            <Button onClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button onClick={this.divide}>/</Button>
            <Button onClick={this.numbers}>0</Button>
            <Button onClick={this.decimal}>.</Button>
            <Button onClick={this.calculate}>=</Button>
            
          </div>
          <div className="row">
            <ClearButton handleClear={this.clear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;