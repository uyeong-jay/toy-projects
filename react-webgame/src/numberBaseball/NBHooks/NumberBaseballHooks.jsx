import React, { useState } from 'react';
import LogsHooks from './LogsHooks';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const candidates = Array.from({ length: 9 }, (v,i) => i+1);

const answer = [];
for (let i=0; i<4; i++) {
  const index = Math.floor(Math.random() * candidates.length);
  answer.push(candidates[index]);
  candidates.splice(index,1);
}
console.log('a');



const NumberBaseballHooks = () => {
  const [currNumber, setCurrNumber] = useState('');
  const [numberOfTries, setNumberOfTries] = useState(0);
  const [triedNumbers,  setTriedNumbers] = useState([]);
  const [result, setResult] = useState([]);
  console.log('b');

  const getResult = () => {
    console.log(answer.join(''));
    let strike = 0;
    let ball = 0;
    let out = 0;
    answer.forEach((v,i) => {
      const index = currNumber.indexOf(v);
      if (index > -1) {
        if (index === i) {
          strike++;
        } else {
          ball++;
        }
      } else {
        out++;
      } 
    })
    setResult([...result, `${currNumber} => strike:${strike}, ball:${ball}, out:${out}`]);
    console.log(strike, ball, out);
    if (answer.join('') === currNumber) {
      setResult([...result,`${currNumber} => 홈러어어어어어언!!! 🥳🥳`]);
    } else if (triedNumbers.length >10) {
      setResult([...result,`${currNumber} => 실패입니다! 답은 ${answer.join('')} 였습니다!`]);
    }
  }
  
  const checkInput = () => {
    if (typeof Number && currNumber.length !== 4) {
      toast("4자리 숫자를 입력해 주세요.");
      return;
    }
    if (/* currNumber.length === 4 &&  */new Set(currNumber).size !== 4) {
      toast("중복되지 않게 입력해 주세요.");
      return;
    }
    if (triedNumbers.includes(currNumber)) {
      toast("이미 시도한 숫자입니다..");
      return;
    }
    return true;
  }

  const onSubmitNumber = (e) => {
    
    if (triedNumbers[triedNumbers.length-1] !== answer.join('') 
        && triedNumbers.length <10) {
      e.preventDefault();
      if (checkInput()) {
        setNumberOfTries(numberOfTries+1);
        setTriedNumbers([...triedNumbers, currNumber]);
        getResult(); 
      }
    } else {
      alert('새로 시작합니다!');
    }
    setCurrNumber('');
    console.log(triedNumbers);
  };

  const onChangeNumber = (e) => {
    setCurrNumber(e.currentTarget.value);
  };

  return(
    <form onSubmit={onSubmitNumber}>
      <div>&lt; 10번 안에 맟춰 보는 숫자야구 :) &gt;</div>
      <br />
      <div>중복되지 않는 숫자 4자리를 입력해주세요</div>
      <input type='text' value={currNumber} onChange={onChangeNumber} required />
      <button type='submit'>확인</button>
      <span>&nbsp;&nbsp;시도: {triedNumbers.length <=10 ? numberOfTries : null}</span>
      {result.map((v,i) => <LogsHooks 
        key={v} 
        result={v} /> )}
      <ToastContainer />
    </form>
  );
}

export default NumberBaseballHooks;