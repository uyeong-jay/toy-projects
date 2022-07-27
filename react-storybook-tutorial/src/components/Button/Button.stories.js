import React from "react";
//1. storybook 적용할 컴포넌트 가져오기
import Button from "./Button";
//1-1. local layout 가져오기
import ButtonLayout from "../Decorators/Button/ButtonLayout";

//2. storybook사이트에서의  불러온 컴포넌트 경로, 제목 설정
export default {
  title: "Design System/Atoms/Button", //heirachy(체계): storybook 사이트에 표시되는 제목과 경로 지정하기
  component: Button, //storybook 사이트에 렌더링할 컴포넌트
  //2-1. local decorators - local layout을 위에서 가져온 컴포넌트에 사용가능
  decorators: [
    (Story) => (
      <ButtonLayout>
        <Story />
      </ButtonLayout>
    ),
  ],
};

//3. storybook 사이트에 렌더링 해주기 (Button.css > Button.js > storybook)
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Tertiary = () => <Button variant="tertiary">Tertiary</Button>;

//renaming: storybook 에서 표시되는 파일 이름을 storyName프로퍼티를 사용해 바꾸기
Primary.storyName = "Primary Button";
Secondary.storyName = "Secondary Button";
Tertiary.storyName = "Tertiary Button";

//args를 사용하는 이유가 뭐지?
// - It allows Storybook and its addons to live edit components. You do not need to modify your underlying component code to use args.
//1.Button을 변경하기 위해 args로 Button의 속성(props)에 접근할 준비함
const Template = (args) => <Button {...args} />;

//2.bind()로 args에 접근함
export const PrimaryA = Template.bind({});
//3.args를 가져온뒤 안의 내용을 바꿔 Button의 속성을 바꿈
//  - 현재 Button의 args는 variant와 children이 있어 그걸 다뤄줌
PrimaryA.args = {
  variant: "primary", //variant로 primary 버튼에 접근
  children: "Primary Args", //primary 버튼의 children(내용)을 바꿈
};

//2,3 동일
export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};

//2,3 동일
export const TertiaryA = Template.bind({});
TertiaryA.args = {
  variant: "tertiary",
  children: "Tertiary Args",
};
