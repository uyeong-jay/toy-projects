import { Request, Response } from "express"; //types
import Users from "@models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      //body 가져오기
      const { name, account, password, cf_password } = req.body;

      //findOne(): 데이터들 중 가장 첫번째 데이터 하나만 탐색
      const user = await Users.findOne({ account });

      //user가 존재하면 에러msg
      if (user)
        return res
          .status(400)
          .json({ msg: "This email or phone number already exist" });

      //단방향 해싱(bcrypt사용)
      //https://st-lab.tistory.com/100 (보안)
      // - 비번(+솔트)  > 해시 > 다이제스트(+솔트) > 해시 > 다이제스트 (더 강화 하고싶을때 보기)
      const passwordHash = await bcrypt.hash(password, 12);

      //새유저 스키마 생성
      const newUser = new Users({
        name,
        account,
        password: passwordHash,
        cf_password,
      });

      return res
        .status(200)
        .json({ msg: "Registered successfully", data: newUser });
    } catch (err) {
      //Object is of type 'unknown' 에러
      // - typescript v4.4부터, try...catch에서 catch의 error object의 타입정의가 변경되어 직접 타입정의를 해줘야 한다.
      if (err instanceof Error)
        return res.status(500).json({ msg: err.message });
    }
  },
};

export default authCtrl;
