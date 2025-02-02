import { Component } from "react";

import "./calculator.css";

export class Calculator extends Component {
  btns = [
    {
      id: "1",
      title: "add",
      value: "+",
    },
    {
      id: "2",
      title: "substract",
      value: "-",
    },
    {
      id: "3",
      title: "multiply",
      value: "*",
    },
    {
      id: "4",
      title: "divide",
      value: "/",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "",
    };
  }

  handleClick = (value) => {
    this.setState((prevState) => ({ input: prevState.input + value }));
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  clearResult = () => {
    this.setState({ result: "" });
  };
  calculateResult = (value) => {
    try {
      this.setState({ result: eval(this.state.result + value + this.state.input).toString() });
      this.setState({ input: '' });
    } catch (error) {
      this.setState({ result: "Error" });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator__inputs">
          <label>Result:</label>
          <input
            type="text"
            value={this.state.result}
            readOnly
            className="calculator__display"
          />
          <label>Input:</label>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            onKeyDown={this.handleKeyPress}
            className="calculator__input"
          />
        </div>
        <div className="calculator__actions">
          {this.btns.map(({ title, value, id }) => (
            <button
              key={id}
              onClick={() => this.calculateResult(value)}
              className="calculator__button"
            >
              {title}
            </button>
          ))}
          <button
            onClick={this.clearInput}
            className="calculator__button calculator__clear"
          >
            Clear input
          </button>
          <button
            onClick={this.clearResult}
            className="calculator__button calculator__clear"
          >
            Clear result
          </button>
        </div>
      </div>
    );
  }
}
