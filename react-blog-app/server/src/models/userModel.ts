import { Schema, model } from "mongoose";
import { IUser } from "@_types/types";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
      trim: true,
      maxLength: [20, "Your name must be 20 chars or less"],
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
    role: {
      type: String,
      default: "user", //admin
    },
    type: {
      type: String,
      default: "register", //login
    },
  },
  //timestamps(Mongoose):
  //1. 해당 스키마에 createdAt, updatedAt를  자동 추가 및 업데이트
  //2. 타입은 Date
  { timestamps: true }
);

//Model 생성
export default model("User", userSchema);
