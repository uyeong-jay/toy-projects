import { Request, Response } from "express";
import { checkLoginUser } from '@controllers/authCtrl/checkUser/checkLoginUser';

export const login = async (req: Request, res: Response) => {
  try {
    const { account, password } = req.body;

    checkLoginUser(account, password, res)

  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
