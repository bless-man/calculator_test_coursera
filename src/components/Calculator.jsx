import { Component } from "react";

import "./calculator.css";

export class Calculator extends Component {
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
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.calculateResult();
    }
  };
  calculateResult = () => {
    try {
      this.setState({ result: eval(this.state.input).toString() });
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
          <label>Calculator:</label>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            onKeyDown={this.handleKeyPress}
            className="calculator__input"
          />
        </div>
        <div className="calculator__actions">
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
          <button
            onClick={this.calculateResult}
            className="calculator__button calculator__equal"
          >
            Get Result
          </button>
        </div>
      </div>
    );
  }
}
