import React, { useState } from 'react';

const GuGuDanHooks = () => {

  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
  const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
  const [userValue, setUsertValue] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(parseInt(userValue) === firstNum * secondNum) {
      setFirstNum(Math.ceil(Math.random() * 9));
      setSecondNum(Math.ceil(Math.random() * 9));
      setUsertValue('');
      setResult('정답입니다!');
    } else {
      setUsertValue('');
      setResult('오답입니다!');
    }
  };

  const onChangeInput = (e) => {
    setUsertValue(e.currentTarget.value);
  };


  return(
    <>
      <div>{firstNum} x {secondNum} = </div>
      <form onSubmit={onSubmit}>
        <input type="number" value={userValue} onChange={onChangeInput} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default GuGuDanHooks;