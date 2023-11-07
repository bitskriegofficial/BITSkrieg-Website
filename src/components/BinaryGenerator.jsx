import React, { Component } from 'react';

class BinaryGenerator extends Component {
  constructor() {
    super();
    this.state = {
      binaryText: '',
    };
  }

  componentDidMount() {
    this.generateBinary();
    this.interval = setInterval(this.updateBinary, 5);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateBinary = () => {
    let binaryText = '';
    for (let i = 0; i < 10500; i++) {
      binaryText += Math.round(Math.random());
    }
    this.setState({ binaryText });
  };

  updateBinary = () => {
    const { binaryText } = this.state;
    const n = binaryText.length;
    const r = Math.floor(Math.random() * n + 1);
    const updatedBinaryText =
      binaryText.substring(0, r) +
      Math.round(Math.random()) +
      binaryText.substring(r + 1);
    this.setState({ binaryText: updatedBinaryText });
  };

  render() {
    return (
      <div
        className="bin"
      >
        {this.state.binaryText}
      </div>
    );
  }
}

export default BinaryGenerator;
