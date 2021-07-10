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
    WinBalls: [],
    BonusBall: null, 
  };

  const onClickRedo = () => {

  }

  render() {
    const { WinBalls, BonusBall } = this.state;
    return(
      <>
        <h4>로또 번호 :</h4>
        <div>{WinBalls}</div>
        <h6>보너스 번호 : </h6>
        <div>{BonusBall}</div>
        <button onclick={onClickRedo}></button>

        <Ball />
      </>
    )
  }
}


export default Lotto;