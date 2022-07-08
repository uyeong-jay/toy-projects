import React from "react";
import Link from "next/link";

const PreRendering = () => {
  return (
    <>
      <h3>Pre rendering</h3>
      <ul>
        <li>
          <Link href="/pre-rendering/users">Users</Link>
        </li>
        <li>
          <Link href="/pre-rendering/posts">Posts</Link>
        </li>
      </ul>
    </>
  );
};

export default PreRendering;
