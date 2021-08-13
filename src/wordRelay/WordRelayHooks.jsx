import React, { useCallback, useRef, useState } from 'react';

const WordRelayHooks = () => {
  const [word, setWord] = useState('');
  const [newWord, setNewWord] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const onRefInput = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newWord && word.length === 3) {
      setNewWord((prev) => word);
      setWord('');
    } else if (
      newWord 
      && word.length === 3 
      && (newWord[newWord.length - 1] === word[0])
      ) {
        setNewWord((prev) => word);
        setWord('');
        setResult('정답입니다!');
        setScore((prev) => score+1);
    } else {
      setWord('');
      setResult('오답입니다!');
      setScore((prev) => score-1);
      
    }
  }

  const onChangeValue = (e) => {
    setWord(e.currentTarget.value);
  }

  return(
    <>
      <form onSubmit={onSubmit}>
        <div>제시어(3글자) : {newWord}</div>
        <input ref={onRefInput} type='text' value={word} onChange={onChangeValue} />
        <button type="submit">입력</button>
      </form>
      <div>결과: {result}</div>
      <div>점수: {score}</div>
    </>
  );
};

export default WordRelayHooks;

