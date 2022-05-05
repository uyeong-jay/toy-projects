// https://www.twilio.com/
// https://www.twilio.com/docs
// https://www.twilio.com/docs/sms/quickstart/node
// https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account
// https://www.twilio.com/docs/usage/secure-credentials
// https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html (twilo 환경변수 세팅 - sysdm.cpl)

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE_NUMBER;

//에러: 'username required'
//해결: https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html
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
    console.log(err);
  }
};

export default sendMessage;
//사용: sendMessage(account, txt);
