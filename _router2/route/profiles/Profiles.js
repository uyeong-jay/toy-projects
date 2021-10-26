import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";
import WithRouter from "../../withRoute/WithRouter";

const Profiles = () => {
  return (
    <>
      <div>
        <h3>Profile Page</h3>
        <ul>
          <li>
            <Link to="/profiles/user1">User1</Link>
          </li>
          <li>
            <Link to="/profiles/user2">User2</Link>
          </li>
        </ul>
      </div>
      <Route
        exact
        path="/profiles"
        render={() => <div>Click User's Profile</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouter />
    </>
  );
};

export default Profiles;
