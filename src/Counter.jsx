import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }
  incrementCount = () => {
    /* TODO: Use setState() to modify the count. Here’s an example:
 this.setState({
 keyToChange: valueToChangeTo
 });
 */
  };

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        {/* TODO: add a button that calls incrementCount() when clicked */}
      </div>
    );
  }
}
export default Counter;
