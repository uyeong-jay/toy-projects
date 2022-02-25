import React, { Component } from 'react';
import Ball from './Ball';


function getWinNumbers() {

  const lottoBalls = Array(45).fill().map((v,i) => i + 1);

  const ballsBowl = [];
  
  while (lottoBalls.length > 0) {
    const shuffledBalls = Math.floor(Math.random() * lottoBalls.length);
    const splicedBalls = lottoBalls.splice(shuffledBalls, 1);
    ballsBowl.push(splicedBalls[0]);
  }

  const winNumbers = ballsBowl.slice(0, 6);
  const bonusNumber = ballsBowl[ballsBowl.length - 1];

  return [...winNumbers, bonusNumber]; 
}

class Lotto extends Component {

  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonusBall: null, 
  };


  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  onClickRedo = () => {
    return;
  }

  render() {
    const { winBalls, bonusBall } = this.state;
    return(
      <>
        <h4>당첨 번호 :</h4>
        <div>{winBalls.map((v,i) => {
          return <Ball key={v} number={v} />
        })}</div>
        <h6>보너스 번호 : </h6>
        <div>{bonusBall}</div>
        <button /* onclick={onClickRedo} */>한번더</button>
      </>
    )
  }
}


export default Lotto;