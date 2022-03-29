import React from "react";
import youtubeData from "../data/youtubeData.json";
import Layout from "../components/shared/Layout";
import ContentLayout from "../components/shared/content/ContentLayout";
import Content from "../components/shared/content/Content";

const Explore = () => {
  return (
    <Layout activeMenu="explore">
      <ContentLayout>
        {youtubeData.data.map((data) => (
          <Content key={data.id} data={data} />
        ))}
      </ContentLayout>
    </Layout>
  );
};

export default Explore;
