import React from "react";
import Button from "./Button";

//storybook 사이트 관련
export default {
  title: "Design System/Atoms/Button", //heirachy(체계): storybook 사이트에 표시되는 제목과 경로 지정하기
  component: Button, //storybook 사이트에 렌더링할 컴포넌트
};

//storybook 사이트에 렌더링 해주기
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Tertiary = () => <Button variant="tertiary">Tertiary</Button>;

//renaming: storybook 에서 표시되는 파일 이름 바꾸기
Primary.storyName = "Primary Button";
Secondary.storyName = "Secondary Button";
Tertiary.storyName = "Tertiary Button";
