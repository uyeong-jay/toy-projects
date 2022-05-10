import { Response } from "express";
import Users from "@src/models/userModel";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "@src/utils/generateToken";

export const checkLoginUser = async (
  account: string,
  password: string,
  res: Response
) => {
  //user 찾기
  const user = await Users.findOne({ account });

  //못찾으면 에러
  if (!user)
    return res.status(400).json({ msg: "This account doesn't exist." });

  //user가 있을경우
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." });

  //유저 id 토큰생성
  const access_token = generateAccessToken({ id: user._id });
  const refresh_token = generateRefreshToken({ id: user._id });

  await Users.findOneAndUpdate({ _id: user._id }, { rf_token: refresh_token });

  res.json({ msg: "Login Success!" });
};
