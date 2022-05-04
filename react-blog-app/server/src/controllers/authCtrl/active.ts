import { Request, Response } from "express"; //types
import { IToken } from "@_types/user";
import User from "@models/userModel";
import jwt from "jsonwebtoken";

export const active = async (req: Request, res: Response) => {
  try {
    const { active_token } = req.body;

    //jwt.verify() > 토큰 확인(인증)
    const decoded = <IToken>(
      jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
    );

    const { newUser } = decoded;
    // console.log(decoded);
    // {
    //   newUser: {
    //     name: 'test1',
    //     account: 'test1@gmail.com',
    //     password: '해쉬',
    //     cf_password: '해쉬'
    //   },
    //   iat: 숫자들,
    //   exp: 숫자들
    // }

    const user = new User(newUser);

    await user.save();
    return res.status(200).json({ msg: "Success!" });
  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
