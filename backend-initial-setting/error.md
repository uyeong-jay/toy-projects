에러1.
prettier/prettier '' error 해결하기

방법1. endOfLine 추가 해주기

```js
//.eslintrc.js

//...
'prettier/prettier': [
  'error',
  {
    endOfLine: 'auto',
  },
],
//...
```

방법2.  
vscode 창 밑의 CRLF를 LF로 바꿔주기 왜냐하면 윈도우는 CRLF가 기본값이기 때문이다.
CRLF란?
LF란?

---

에러2.
Error: Unexpected token m in JSON at position 0
: json파일들을 json형식에 맟춰 써주지 않아서 발생하는 에러
