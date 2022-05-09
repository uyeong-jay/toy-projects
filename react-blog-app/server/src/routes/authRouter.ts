import express from "express";
import authCtrl from "@controllers/authCtrl/index";

import { valid } from "@middleware/valid";

const authRouter = express.Router();

//에러: valid - No overload matches this call. The last overload gave the following error.
//해결: req, res 순서 지키기
authRouter.post("/register", valid, authCtrl.register);
authRouter.post("/active", authCtrl.active);
authRouter.post("/login", authCtrl.login);

export default authRouter;
