import express from "express";
import authCtrl from "@controllers/authCtrl";

const authRouter = express.Router();

authRouter.post("/register", authCtrl.register);

export default authRouter;
