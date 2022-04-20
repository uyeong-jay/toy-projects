import { Schema, model } from "mongoose";

// 1. interface 생성 후 데이터(in mongoDB) 마다 타입 설정하기
interface User {
  name: object;
  account: object;
  password: object;
  avatar: object;
  type: object;
}

// 2. Schema 생성후 타입 적용하기
const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
      trim: true,
      maxLength: [20, "Your name can be up to 20 chars long"],
    },
    account: {
      type: String,
      required: [true, "Please add your email or phone number"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/uyeong/image/upload/v1637676343/nextjs_media/igin1evr3clomdfy2ikm.png",
    },
    type: {
      type: String,
      default: "normal",
    },
  },
  //timestamps(Mongoose):
  //1. 해당 스키마에 createdAt, updatedAt를  자동 추가 및 업데이트
  //2.타입은 Date
  { timestamps: true }
);

// 3. Model 생성하기.
export default model("User", userSchema);
