import { Response, Request, NextFunction } from "express";

//이메일 유효성 검사
//https://stackoverflow.com/questions/46155
const validateEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
  //Use 'regex.test(a)' if you want a faster boolean check. Use 'a.match(regex)' to retrieve all matches when using the g global flag.
};

//휴대전화(한국) 유효성 검사
//https://yozm.wishket.com/magazine/detail/1217/
const validatePhoneNumber = (phone: string) => {
  const regex = /^\d{2,3}-?\d{3,4}-?\d{4}/g;

  return regex.test(phone);
};

export const valid = async (
  res: Response, //보내기
  req: Request, //받아오기
  next: NextFunction
) => {
  const { name, account, password, cf_password } = req.body;

  // name: 채우기, 20자이내
  // account: 채우기, 형식일치(이메일, 폰)
  // password: 채우기, 6자이상
  // cf_password: 채우기, 비번비교
  if (!name) return res.status(400).json({ msg: "Please add your name" });
  else if (name.length >= 20)
    return res.status(400).json({ msg: "Your name must be 20 chars or less" });

  if (!account)
    return res
      .status(400)
      .json({ msg: "Please add your email or phone number" });
};
