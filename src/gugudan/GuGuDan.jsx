import React, { Component } from 'react';

class GuGuDan extends Component {
  state = {
    firstNum: Math.ceil(Math.random() * 9), // 1~9
    secondNum: Math.ceil(Math.random() * 9), // 1~9
    userValue: '',
    result: '',
  };

  onChangeUserValue = (e) => {
    this.setState({
      userValue: e.currentTarget.value,
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.userValue) === this.state.firstNum * this.state.secondNum) {
      this.setState({
        firstNum: Math.ceil(Math.random() * 9),
        secondNum: Math.ceil(Math.random() * 9),
        userValue: '',
        result: '정답입니다!',
      })

    } else {
      this.setState({
        userValue: '',
        result: '오답입니다!',

      })
    }
  }


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
          <button type="submit">입력</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

export default GuGuDan;