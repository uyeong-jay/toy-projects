import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = await res.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occured...";
  if (!data) return "Loading...";
  return (
    <>
      <h3>Dashboard</h3>
      <ul>
        <li>Likes: {data.likes}</li>
        <li>Posts: {data.posts}</li>
        <li>Followers: {data.followers}</li>
        <li>Followings: {data.followings}</li>
      </ul>
    </>
  );
};

export default DashboardSWR;
