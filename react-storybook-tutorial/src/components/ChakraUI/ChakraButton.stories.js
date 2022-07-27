import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-essentials"; //args에 추가시 import 해주기

export default {
  title: "Design system/Atoms/ChakraUI/Button",
  component: Button,
  // argTypes: {
  //   onClick: { action: "clicked!!" }, //이벤트 추가 가능
  // },
};

//직접 생성시 (storybook에서 control 사용불가)
// export const Success = () => <Button colorScheme="cyan">Cyan</Button>;
// export const Danger = () => <Button colorScheme="purple">Purple</Button>;

//args를 활용해 생성시 (storybook에서 controls 사용가능 (변경하며 테스트해보는게 가능) )
const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
  onClick: action("clicked!"), //이벤트 하나 추가 가능
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: "red",
  children: "Danger",
  ...actions("onClick", "onMouseOver"), //이벤트 여러개 추가 가능
};
