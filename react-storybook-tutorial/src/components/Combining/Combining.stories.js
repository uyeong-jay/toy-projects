import React from "react";
import { Primary } from "../Button/Button.stories";
import { Small } from "../Input/Input.stories";

export default {
  title: "Design System/Atoms/Combining", //폴더와 파일 경로 지정
};

//두 스토리 파일 결합 하기 > 두개가 합쳐져서 화면에 보임
export const PrimarySmall = () => {
  return (
    <>
      <Primary />
      <Small />
    </>
  );
};
