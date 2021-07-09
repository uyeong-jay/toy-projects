import React, { Component } from 'react';
import Ball from './Ball';


function getWinNumbers() {
  console.log('getWinNumbers');
  const lottoBalls = Array(45).fill().map((v,i) => i + 1);
  const shuffledBalls = Math.floor(Math.random() * lottoBalls.length)
  const splicedBalls = lottoBalls.splice(shuffledBalls, 1);
  const ballsBowl = [];
  while (lottoBalls.length > 0) {
    ballsBowl.push(splicedBalls[0]);
  }
  const winNumbers = ballsBowl.slice(0, 6);
  const bonusNumber = ballsBowl[ballsBowl.length - 1];
  return [...winNumbers, bonusNumber]; 
}

class Lotto extends Component {

  state = {
    WinBalls: [],
    
  };

  render() {
    return(
      <>
        <div>로또 번호 :</div>
        <div>{WinBalls}</div>
        <div>보너스 번호 : </div>
        <Ball />
      </>
    )
  }
}
export default Lotto;