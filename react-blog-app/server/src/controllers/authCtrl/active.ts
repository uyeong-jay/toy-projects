import { Request, Response } from "express"; //types
import { IDecodedToken } from "@src/_types/types";
import Users from "@models/userModel";
import jwt from "jsonwebtoken";

export const active = async (req: Request, res: Response) => {
  try {
    const { active_token } = req.body;

    //jwt.verify() > 토큰 확인(인증)
    const decoded = <IDecodedToken>(
      jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
    );
    console.log(decoded);
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

    const { newUser } = decoded;

    //디코드된 newUser가 없으면 인증에러
    if (!newUser)
      return res.status(400).json({ msg: "Invalid authentication." });

    //newUser.account 가 이미 존재하는지 확인
    const user = await Users.findOne({ account: newUser.account });
    if (user) return res.status(400).json({ msg: "Account already exists." });

    //디코드된 newUser를 new 연산자로 Users 객체의 인스턴스 생성
    const new_user = new Users(newUser);
    // console.log(user);
    // {
    //   name: 'test2',
    //   account: 'test2@gmail.com',
    //   password: '해쉬',
    //   avatar: '주소',
    //   role: 'user',
    //   type: 'normal',
    //   _id: new ObjectId("~~")
    // }

    //db에 user 객체 (model형식으로)저장 with (createdAt, updatedAt)
    await new_user.save();
    return res.status(200).json({ msg: "Success!" });
  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
