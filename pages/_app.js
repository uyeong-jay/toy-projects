import '../styles/global.css'; 
//global CSS files: only inside pages/_app.js 


export default function App({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  );
};
//You need to restart the development server when you add pages/_app.js.