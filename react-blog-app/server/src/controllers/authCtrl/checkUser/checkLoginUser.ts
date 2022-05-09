import { Response } from "express";
import Users from "@src/models/userModel";

export const checkLoginUser = async (account: string, res: Response) => {
  //user 찾기
  const user = await Users.findOne({ account });

  //못찾으면 에러
  if (!user)
    return res.status(400).json({ msg: "This account doesn't exist." });

  //user가 있을경우
};
