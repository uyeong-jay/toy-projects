// https://www.twilio.com/ - TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER 받기(TWILIO_AUTH_TOKEN는 주기적으로 새로 계속 바뀜 - 따라서 바뀐 토큰 확인 후 sysdm.cpl에서 새로 환경변수 세팅해주기)
// https://www.twilio.com/docs
// https://www.twilio.com/docs/sms/quickstart/node - 튜토리얼 따라하기 - node 버전
// https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account
// https://www.twilio.com/docs/usage/secure-credentials
// https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html (twilo 환경변수 세팅 - sysdm.cpl)

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE_NUMBER;

//에러: 'username required'
//해결: https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html - twilo 환경변수 세팅
const client = require("twilio")(accountSid, authToken);

const sendMessage = (to: string, body: string) => {
  try {
    client.messages
      .create({
        to,
        body,
        from,
      })
      .then((message: { sid: any }) => console.log(message.sid));
  } catch (err) {
    console.error(err);
  }
};

export default sendMessage;
//사용: sendMessage(account, txt);
