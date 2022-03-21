export default function handler(req, res) {
  res.status(200).json({ text: 'Hello!' })
};
// http://localhost:3000/api/hello

// {
//   "text": "Hello!"
// }

//---------------------------------------------
//getStaticProps or getStaticPaths (or helper function) 에 서버 측 코드를 직접 쓰기
//getStaticProps 와 getStaticPaths 는 서버에 실행되는 것들이기 때문에