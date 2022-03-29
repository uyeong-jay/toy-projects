import React from "react";
//직접 정렬하지 않고, 데이터를 제공해야하는 이유
// 👉 리액트에서 데이터는 단순히 정렬만 수행하면 되는 것이 아니다.
// 데이터를 단순히 정렬만 한다고 해서 리렌더링의 조건을 만족시키지 않기 때문이다.
// 기존 데이터를 State로 구성하고, 정렬을 수행해야 한다.
// 데이터가 단순한 배열이 아니기 때문에 이 부분에서 코드의 이해가 어렵기도 하고, 또 일반적으로 정렬과 같은 작업은 데이터를 받아올 때 수행되기 때문에 데이터를 새로 넣음
import sortedYoutubeData from "../data/sortedYoutubeData.json";
import Layout from "../components/shared/Layout";
import ContentLayout from "../components/shared/content/ContentLayout";
import SubscriptionCard from "../components/subscription/SubscriptionCard";

const Subscription = () => {
  return (
    <Layout activeMenu="subscription">
      <ContentLayout>
        {sortedYoutubeData.data?.map((data) => (
          <SubscriptionCard key={data.id} data={data} />
        ))}
      </ContentLayout>
    </Layout>
  );
};

export default Subscription;
