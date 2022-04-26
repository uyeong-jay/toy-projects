import { Response, Request, NextFunction } from "express";

//이메일 유효성 검사
//https://stackoverflow.com/questions/46155
const validateEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase()); //true or false
  //Use 'regex.test(a)' if you want a faster boolean check. Use 'a.match(regex)' to retrieve all matches when using the g global flag.
};

//휴대전화(한국) 유효성 검사
//https://yozm.wishket.com/magazine/detail/1217/
const validatePhoneNumber = (phone: string) => {
  const regex = /^\d{2,3}-?\d{3,4}-?\d{4}/g;

  return regex.test(phone); //true or false
};

//유효성 검사
export const valid = (
  req: Request, //받아오기
  res: Response, //보내기
  next: NextFunction
) => {
  const { name, account, password, cf_password } = req.body;

  // name: 채우기, 20자이내
  if (!name) return res.status(400).json({ msg: "Please add your name." });
  else if (name.length >= 20)
    return res.status(400).json({ msg: "Your name must be 20 chars or less." });

  // account: 채우기, 형식일치(이메일, 폰)
  if (!account)
    return res
      .status(400)
      .json({ msg: "Please add your email or phone number." });
  else if (!validateEmail(account) && !validatePhoneNumber(account))
    return res
      .status(400)
      .json({ msg: "Your email or phone number format is incorrect." });

  // password: 채우기, 6자이상
  if (!password)
    return res.status(400).json({ msg: "Please add your password" });
  else if (password.length < 6)
    return res
      .status(400)
      .json({ msg: "Your password must be 6 chars or more." });

  // cf_password: 채우기, 비번비교
  if (!cf_password)
    return res.status(400).json({ msg: "Please add confirm password" });
  else if (password !== cf_password)
    return res
      .status(400)
      .json({ msg: "Your password and confirm password should be same." });

  next();
};
