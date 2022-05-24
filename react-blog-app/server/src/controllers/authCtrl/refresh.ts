import { Request, Response } from "express"; //types
import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";
import jwt from "jsonwebtoken";
import { IDecodedToken } from "@_types/types";
import Users from "@models/userModel";

export const refresh = async (req: Request, res: Response) => {
  try {
    //res.cookie() >> 쿠키 만들기
    //req.cookies.~ >> 쿠키 가져오기
    //res.clearCookie() >> 쿠키 삭제하기

    //rf_token 쿠키 가져오기
    const rf_token = req.cookies.refresh_token;
    if (!rf_token) return res.status(400).json({ msg: "Please login first!" });

    //rf_token 쿠키 디코드 하기
    const decoded = <IDecodedToken>(
      jwt.verify(rf_token, `${process.env.REFRESH_TOKEN_SECRET}`)
    );
    // console.log(decoded);
    // { id: '628c484bd2b44d75c5515c18', iat: 1653360788, exp: 1655952788 }
    if (!decoded) res.status(400).json({ msg: "Please login first!" });

    //디코드된 데이터의 id값으로 동일한 id의 유저 찾기
    const user = await Users.findById(decoded?.id).select("-password");
    // console.log(user);
    // {
    //   _id: new ObjectId("628c484bd2b44d75c5515c18"),
    //   name: 'test2',
    //   account: 'tomas718@naver.com',
    //   avatar: 'https://res.cloudinary.com/uyeong/image/upload/v1637676343/nextjs_media/igin1evr3clomdfy2ikm.png',
    //   role: 'user',
    //   type: 'normal',
    //   createdAt: 2022-05-24T02:51:55.843Z,
    //   updatedAt: 2022-05-24T02:51:55.843Z,
    //   __v: 0
    // }
    if (!user) res.status(400).json({ msg: "This account doesn't exist." });

    //
    //에러: error TS2531: Object is possibly 'null'.
    //해결: 옵셔널 체이닝 넣어줌으로써 해결
    // const access_token = generateAccessToken({ _id: user?._id });

    res.status(200).json({ msg: "success!" });
  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
