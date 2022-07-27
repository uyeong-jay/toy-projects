import React from "react";
import GlobalLayout from "../src/components/Decorators/Global/GlobalLayout";
//Chakra UI 적용을 위해 ChakraProvider 불러오기
import { ChakraProvider } from "@chakra-ui/react";

//global decorators 생성
export const decorators = [
  (Story) => (
    //ChakraProvider를 가장 외부에 감싸주기
    <ChakraProvider>
      <GlobalLayout>
        <Story />
      </GlobalLayout>
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //sorting: 폴더들 알파벳 순으로 폴더 정렬하기(이것말고 다른방법은 docs 참고하기)
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
