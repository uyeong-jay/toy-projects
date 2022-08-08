import React from "react";
import Link from "next/link";

const PreRendering = () => {
  return (
    <>
      <h3>Pre rendering</h3>
      <ul>
        <li>
          <Link href="/pre-rendering/SSG/users">Users (SSG)</Link>
        </li>
        <li>
          <Link href="/pre-rendering/SSG/posts">Posts (SSG)</Link>
        </li>
        <li>
          <Link href="/pre-rendering/SSG/products">Products (SSG)</Link>
        </li>
        <br />
        <li>
          <Link href="/pre-rendering/SSR/news">News (SSR)</Link>
        </li>
        <br />
        <li>
          <Link href="/pre-rendering/CSR/dashboard">Dashboard (CSR)</Link>
        </li>
        <li>
          <Link href="/pre-rendering/CSR/dashboard-swr">
            Dashboard-SWR (CSR)
          </Link>
        </li>
        <li>
          <Link href="/pre-rendering/CSR/events">Events (CSR)</Link>
        </li>
      </ul>
    </>
  );
};

export default PreRendering;
