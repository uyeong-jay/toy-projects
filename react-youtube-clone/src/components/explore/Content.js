import React, { useState } from "react";
import youtubeData from "../../data/youtubeData.json";
import ContentDetail from "./ContentDetail";

const categories = ["전체", "LISA", "BTS", "아이폰"];

const Content = () => {
  const [category, setCategory] = useState("전체");

  const onClickCategory = (e) => {
    e.preventDefault();
    setCategory(e.currentTarget.value);
  };

  const newData = youtubeData.data.filter((data, i) => {
    const isTrueInTitle = data.title.includes(category);

    const isTrueInDescription = data.description.includes(category);

    if (category === "전체") {
      return data;
    }
    return isTrueInTitle === true || isTrueInDescription === true;
  });

  return (
    <>
      <div>
        {categories.map((v, i) => {
          return (
            <button
              key={i}
              type="submit"
              name="category"
              value={v}
              onClick={onClickCategory}
              style={{
                width: "80px",
                height: "30px",
                margin: "5px 10px 10px 0",
                padding: "5px",
              }}
            >
              {v}
            </button>
          );
        })}
      </div>
      {newData.map((v, i) => (
        <ContentDetail key={v.id} data={v} />
      ))}
    </>
  );
};

export default Content;
