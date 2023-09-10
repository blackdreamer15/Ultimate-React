import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={handleDecrement}>-</button>

        <span>{this.state.count}</span>

        <button>+</button>
      </div>
    );
  }
}

export default Counter;