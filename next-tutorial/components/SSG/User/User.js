import React from "react";
import Link from "next/link";

const User = ({ user }) => {
  return (
    <Link href={`/pre-rendering/SSG/users/${user.id}`} passHref>
      <li>
        {user.name}
        <br />
        {user.email}
        <br />
        <br />
      </li>
    </Link>
  );
};

export default User;
