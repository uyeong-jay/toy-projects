import React, { useState } from 'react';

const LogsHooks = ({ triedNumbers, answer, currNumber }) => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [out, setOut] = useState(0);
  console.log(answer);

  const manageLogs = () => {
    answer.forEach((v,i) => {
      const index = currNumber.indexOf(v);
      if (index > -1) {
        if (index === i) {
          setStrike(strike+1);
        } else {
          setBall(ball+1);
        }
      } else {
        setOut(out+1);
      } 
    })
  }

  return(
    <div>
      {manageLogs()}
      {answer.join('') === triedNumbers[triedNumbers.length-1] 
        ? <div>홈런</div> 
        : triedNumbers.length >= 3
          ? <div>실패입니다! 답은 {answer.join('')} 였습니다!</div>
          : <div>{triedNumbers[triedNumbers.length-1]} &#8594; strike:{strike}, ball:{ball}, out:{out}</div>}
    </div>
  )
}

export default LogsHooks;