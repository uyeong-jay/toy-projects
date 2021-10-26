import React from "react";
import { withRouter } from "react-router-dom";

const WithRouter = ({ location, match, history }) => {
  return (
    <>
      <div style={{ fontSize: "1.5rem", marginTop: "1rem" }}>+</div>
      <h4 style={{ marginTop: 0, marginBottom: 0 }}>loaction</h4>
      <textarea style={{ resize: "none", height: "7rem" }} readOnly>
        {JSON.stringify(location, null, 2)}
      </textarea>
      <h4 style={{ marginBottom: 0 }}>match</h4>
      <textarea style={{ resize: "none", height: "7rem" }} readOnly>
        {JSON.stringify(match, null, 2)}
      </textarea>
      <h4 style={{ marginBottom: 0 }}>history</h4>
      <button onClick={() => history.push("/")}>Go Home</button>
    </>
  );
};

export default withRouter(WithRouter);
