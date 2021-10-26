import React, { useEffect } from "react";

const History = ({ history }) => {
  const { block, goBack, push } = history;
  useEffect(() => {
    const blocking = block("Really wanna leave?");
    return () => blocking();
    // eslint-disable-next-line
  }, [history]);

  return (
    <div>
      <button onClick={() => goBack()}>Go Back</button>
      <button onClick={() => push("/")}>Go Home</button>
    </div>
  );
};

export default History;
