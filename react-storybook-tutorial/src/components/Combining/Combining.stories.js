import React from "react";
import { Primary } from "../Button/Button.stories";
import { Small } from "../Input/Input.stories";

export default {
  title: "Design System/Atoms/Combining", //폴더와 파일 경로 지정
};
//Design System/Atoms/Combining 여기서의 [Combining] 과 밑의 함수의 이름 [Primary]을 지금처럼 서로 다르게 해야 위의 Combining이 storybook에서 폴더로 바뀌어 보임. 같게 하면 파일로 나옴.
//두 스토리 파일 결합 하기 > 두개가 합쳐져서 화면에 보임
export const InputWithButton = () => {
  return (
    <>
      <Small />
      <Primary />
    </>
  );
};
