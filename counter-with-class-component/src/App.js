import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleDecrement() {

  }

  handleIncrement() {

  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>

        <span>{this.state.count}</span>

        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;