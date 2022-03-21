import '../styles/global.css'; 
//global CSS files은 반드시 pages/_app.js 안에서 import


export default function App({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  );
};
//pages폴더에 _app.js 추가시 개발서버 재시작해주기