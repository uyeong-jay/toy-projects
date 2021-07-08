import React, { Component } from 'react';
import Ball from './Ball';


function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v,i) => i + 1);// 1 ~ 45 까지 숫자 나열
  // Array(2)
  // (2) [empty × 2]
  // Array(2).fill()
  // (2) [undefined, undefined]
  const shuffle = [];
  while (candidate.length) {
    
  }
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