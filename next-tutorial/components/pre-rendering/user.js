import React from "react";

const User = ({ user }) => {
  return (
    <li>
      {user.name}
      <br />
      {user.email}
      <br />
      <br />
    </li>
  );
};

export default User;
