import React, { useState } from "react";
import { useRouter } from "next/router";

const Events = ({ events }) => {
  const [eventList, setEventList] = useState(events); //getServerSideProps 에서 받아온 데이터를 기본 값으로 사용하기
  const router = useRouter();

  //sports 카테고리만 가져와주는 필터함수
  const fetchSportsEvents = async () => {
    const res = await fetch("http://localhost:4000/events?category=sports");
    const data = await res.json();
    setEventList(data); //화면 변경
    // router.replace("?category=sports"); //뒤로가기가 먹힘(history를 대체)
    router.push("?category=sports", undefined, {
      shallow: true,
    }); //뒤로가기가 안먹힘(url은 바뀜)
    //shallow: Update the path of the current page without rerunning
    //화면과 url을 일치시켜주기 위해 사용
    // '/' 를 맨앞에 써주면 전체 url을 변경함(/events?category=sports)
    // '/' 를 안쓰면 현재 url에 추가됨(events?category=sports)
  };

  return (
    <>
      <h3>List of events</h3>
      {eventList.map((event, i) => (
        <ul key={event.id}>
          <li>{event.title}</li>
          <li>{event.category}</li>
          <li>{event.description}</li>
        </ul>
      ))}
      <button onClick={fetchSportsEvents}>Sports</button>
    </>
  );
};

export default Events;

export const getServerSideProps = async ({ query }) => {
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();

  return {
    props: {
      events: data,
    },
  };
};
