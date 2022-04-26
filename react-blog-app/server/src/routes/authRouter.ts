import express from "express";
import authCtrl from "@controllers/authCtrl";
import { valid } from "@middleware/valid";

const authRouter = express.Router();

//error: valid - No overload matches this call. The last overload gave the following error. => req, res 순서 재대로 바꿔 해결
authRouter.post("/register", valid, authCtrl.register);

export default authRouter;
