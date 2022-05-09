import { Request, Response } from "express";
import Users from "@models/userModel";

export const login = async (req: Request, res: Response) => {
  try {
    const { account, password } = req.body;

    return res.status(200).json({ msg: "Login Success!" });
  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
