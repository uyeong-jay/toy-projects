//해당 파일을 변경한 뒤에는 yarn storybook으로 다시 storybook을 시작해 주기
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    //storybook 상단에 위치한 각자의 기능이 있는 작은 아이콘들
    //addon-essentials: docs, actions, viewport, controls, backgrounds, toolbars, measure 이 포함 되어있음
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
