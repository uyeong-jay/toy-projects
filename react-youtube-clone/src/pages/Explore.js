import React from "react";
import Layout from "../components/shared/Layout";
import ContentLayout from "../components/shared/ContentLayout";
import styles from "../styles/pages/Explore.module.css";
import Content from "../components/shared/Content";

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
