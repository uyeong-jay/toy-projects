import React, { Component } from 'react';

class GuGuDanClass extends Component {
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

    if (parseInt(this.state.userValue) === this.state.firstNum * this.state.secondNum) 
    {
      this.setState((prevState) => {
        return {
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          userValue: '',
          result: '정답 : ' + prevState.userValue, //현재값 사용됨
        };
      })
      this.$input.focus();

    } else {
      this.setState({
        userValue: '',
        result: '오답입니다!',

      });
      this.$input.focus();

    }
  }


  $input;

  render() {
    const { firstNum,
      secondNum,
      userValue,
      result, } = this.state;

    return(
      <>
        <div> {firstNum} x {secondNum} = </div>
        <form onSubmit={this.onSubmit}>
          <input ref={(c) => { this.$input = c; }} type="number" value={userValue} onChange={this.onChangeUserValue} />
          <button type="submit">입력</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

export default GuGuDanClass;