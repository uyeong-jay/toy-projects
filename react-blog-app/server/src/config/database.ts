import mongoose from "mongoose";

const URI = process.env.MONGODB_URL;

// mongoose.connect(`${URI}`, {
//   //몽고디비 6버전 이상에서는 아래 4줄의 코드가 기본값
//   // useCreateIndex: true,
//   // useFindAndModify: false,
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// }, (err) => {})

mongoose.connect(`${URI}`, (err) => {
  if (err) console.log("mongodb conection error.", err);
  console.log("mongodb connected.");
});
