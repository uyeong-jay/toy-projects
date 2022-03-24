import React from "react";
import Layout from "../components/shared/Layout";
import ContentLayout from "../components/shared/ContentLayout";
import styles from "../styles/pages/Explore.module.css";

const Explore = () => {
  return (
    <Layout activeMenu="explore">
      <ContentLayout>Explore</ContentLayout>
    </Layout>
  );
};

export default Explore;
