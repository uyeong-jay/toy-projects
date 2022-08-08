import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true); //개인적인 내용의 컴포넌트는 Loading의 기본값을 false가 아닌 true로 하여 pre-rendering이 될때 seo가 Loading만 볼수 있게 만들어 정보를 보호하기(network preview에서 확인 가능)
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
  return (
    <>
      <h3>Dashboard</h3>
      <ul>
        <li>Likes: {dashboardData.likes}</li>
        <li>Posts: {dashboardData.posts}</li>
        <li>Followers: {dashboardData.followers}</li>
        <li>Followings: {dashboardData.followings}</li>
      </ul>
    </>
  );
};

export default Dashboard;
