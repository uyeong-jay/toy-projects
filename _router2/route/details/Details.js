import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

const Details = () => {
  return (
    <>
      <h2>Detail Page</h2>
      <div>
        <Link to="/details?more=true">
          <button>More</button>
        </Link>
      </div>
      <Route path="/details" component={Detail} />
    </>
  );
};

export default Details;
