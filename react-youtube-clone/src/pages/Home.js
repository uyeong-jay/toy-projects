import React, { useState } from "react";
import youtubeData from "../data/youtubeData.json";
import Layout from "../components/shared/Layout";
import HomeCard from "../components/home/HomeCard";
import HomeFilter from "../components/home/HomeFilter";
import styles from "../styles/pages/home/Home.module.css";

const categories = ["전체", "LISA", "BTS", "아이폰"];

function Home() {
  const [categoryText, setCategoryText] = useState("전체");

  const onClickCategory = (e) => {
    setCategoryText(e.currentTarget.value);
  };

  const newData = youtubeData.data.filter((data, i) => {
    const isTrueInTitle = data.title.includes(categoryText);

    const isTrueInDescription = data.description.includes(categoryText);

    if (categoryText === "전체") {
      return data;
    }
    return isTrueInTitle === true || isTrueInDescription === true;
  });

  return (
    <Layout activeMenu="home">
      <div className={styles.header}>
        {categories.map((category, i) => (
          <HomeFilter
            key={i}
            category={category}
            categoryText={categoryText}
            onClickCategory={onClickCategory}
          />
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {newData.map((data, i) => (
            <HomeCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
