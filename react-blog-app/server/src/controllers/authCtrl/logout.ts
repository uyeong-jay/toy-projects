import { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("refresh_token", { path: `/api/rf_token` });

    res.status(200).json({ msg: "Logged out!" });
  } catch (err) {
    if (err instanceof Error) return res.status(500).json({ msg: err.message });
  }
};
