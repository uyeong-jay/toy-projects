import { Request, Response } from "express"; //types
import Users from "@models/userModel";
import bcrypt from "bcrypt";
import { generateActiveToken } from "@config/generateToken";
import sendEmail from "@config/sendEmail";
import { validateEmail } from "@middleware/valid";

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      //client에서 body 가져오기
      const { name, account, password, cf_password } = req.body;

      //findOne(): 데이터들 중 가장 첫번째 데이터 하나만 탐색
      const user = await Users.findOne({ account });

      //user가 존재하면 에러msg
      if (user)
        return res
          .status(400)
          .json({ msg: "This email or phone number already exist" });

      //단방향 해싱(여기선 bcrypt사용)
      //https://st-lab.tistory.com/100 (보안)
      // - 비번(+솔트)  > 해시 > 다이제스트(+솔트) > 해시 > 다이제스트
      //(더 강화 하고싶을때 해보기)
      const salt = await bcrypt.genSalt(5);
      const passwordHash = await bcrypt.hash(password, salt);

      //새유저 데이터 모음
      const newUser = {
        name,
        account,
        password: passwordHash,
        cf_password,
      };

      //active토큰 생성
      //jwt홈페이지(https://jwt.io/) 에서 디코드된 상태의 데이터 확인 가능
      // { newUser: { ~ } } >> 토큰화 (newUser에 {} 한번 더 씌워서 한번에 넘겨준것)
      const active_token = generateActiveToken({ newUser });

      const url = `${process.env.BASE_URL}/active/${active_token}`;
      const txt = "Verify your email address";
      if (validateEmail(account)) {
        //true or false
        sendEmail(account, url, txt);
        //새유저 데이터, active토큰 클라이언트로 보내기
        return res.status(200).json({
          // msg: "Registered successfully",
          // data: newUser,
          // active_token,
          msg: "Success! Please check your email.",
        });
      } else {
        return res.status(400).json({ msg: "Your email is invalid." });
      }
    } catch (err) {
      //에러: Object is of type 'unknown'
      //해결: typescript v4.4부터, try...catch에서 catch의 error object의 타입정의가 변경되어 직접 타입정의를 해줘야 한다.
      if (err instanceof Error)
        return res.status(500).json({ msg: err.message });
    }
  },
};

export default authCtrl;
