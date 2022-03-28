import React from "react";
import Layout from "../components/shared/Layout";
import ContentLayout from "../components/explore/ContentLayout";
import Content from "../components/explore/Content";

const Explore = () => {
  return (
    <Layout activeMenu="explore">
      <ContentLayout>
        <Content />
      </ContentLayout>
    </Layout>
  );
};

export default Explore;
