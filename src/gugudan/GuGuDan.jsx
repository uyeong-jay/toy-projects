import React, { Component } from 'react';

class GuGuDan extends Component {
  state = {
    firstNum: Math.ceil(Math.random() * 9), // 1~9
    secondNum: Math.ceil(Math.random() * 9), // 1~9
    userValue: '',
    result: '',
  };

  render() {
    const { firstNum,
      secondNum,
      userValue,
      result, } = this.state;

    return(
      <>
        <div> {firstNum} x {secondNum} = </div>
        <form onSubmit={this.onSubmit}>
          <input type="number" value={userValue} onChange={this.onChangeUserValue} />
          <button>입력</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

export default GuGuDan;