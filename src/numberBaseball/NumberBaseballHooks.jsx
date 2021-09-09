import React, { useState } from 'react';

const NumberBaseballHooks = () => {
  const [number, setNumber] = useState();
  const [logs, setLogs] = useState('');
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [out, setOut] = useState(0);


  const getAnswer = () => {
    const numbers = Array.from({ length: 9 }, (v,i) => i+1);

    const answer = [];
    for (let i=0; i<4; i++) {
      const index = Math.floor(Math.random() * numbers.length);
      answer.push(number[index]);
      number.splice(index,1);
    }
  }



  const checkInput = (num) => {

  }

  const onSubmitNumber = (e) => {
    e.preventDefault();
    setNumber('');
    checkInput(number);
  }

  const onChangeNumber = (e) => {
    setNumber(e.currentTarget.value);
  }

  return(
    <from onSubmit={onSubmitNumber}>
      <div>&lt; 10번 안에 맟춰 보는 숫자야구 :) &gt;</div>
      <br />
      <div>중복되지 않는 숫자 4자리를 입력해주세요</div>
      <input type='text' value={number} onChange={onChangeNumber} required />
      <button type='submit'>확인</button>
      <div>{logs}</div>
    </from>
  );
}

export default NumberBaseballHooks;