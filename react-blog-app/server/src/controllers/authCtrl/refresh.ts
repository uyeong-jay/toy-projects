import { Request, Response } from "express"; //types
import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";

export const refresh = async (req: Request, res: Response) => {
  try {
    //쿠키 가져오기
    //res.cookie() >> 쿠키 만들어 보내기
    //req.cookies.~ >> 쿠키 가져오기
    const rf_token = req.cookies.refresh_token;
    console.log(rf_token);

    res.status(200).json({ msg: "success!" });
  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
