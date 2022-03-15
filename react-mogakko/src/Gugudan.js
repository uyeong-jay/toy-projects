import React, { useMemo } from "react";

const Gugudan = ({ number }) => {
  const secondNum = useMemo(() => {
    const oneToNineArr = [];
    for (let i = 1; i < 10; i++) {
      oneToNineArr.push(i);
    }
    return oneToNineArr;
  }, []);

  return (
    <div>
      <h3>Gu Gu Dan</h3>
      <div>
        {secondNum.map((v, i) => (
          <div>
            {number} * {v} = {number * v}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gugudan;
