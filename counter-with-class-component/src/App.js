import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;