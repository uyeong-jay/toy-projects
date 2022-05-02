const nodemailer = require("nodemailer");
import { OAuth2Client } from "google-auth-library";

//메일 발송 함수
// - 보내는 사람: wjacob2103@gmail.com
// - 받는 사람: wwjjss2104@gmail.com (여기서 받은 메일 확인)
//1)https://console.developers.google.com
//2)https://developers.google.com/oauthplayground/ (Authorize APIs: http://mail.google.com)
const sendEmail = async (to: string, url: string, txt: string) => {
  //OAuth2 example
  //https://github.com/googleapis/google-auth-library-nodejs#a-complete-oauth2-example
  const oAuth2Client = new OAuth2Client(
    process.env.MAIL_CLIENT_ID,
    process.env.MAIL_CLIENT_SECRET,
    process.env.MAIL_REFRESH_TOKEN
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.MAIL_REFRESH_TOKEN,
  });

  try {
    const access_token = await oAuth2Client.getAccessToken();

    //nodemailer example
    //https://nodemailer.com/smtp/oauth2/#oauth-3lo
    //https://nodemailer.com/smtp/oauth2/#example-3
    const transport = nodemailer.createTransport({
      service: "gmail", //어느 메일을 이용할지
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.SENDER_EMAIL_ADDRESS, // 보내는 사람의 이메일
        clientId: process.env.MAIL_CLIENT_ID,
        clientSecret: process.env.MAIL_CLIENT_SECRET,
        refreshToken: process.env.MAIL_REFRESH_TOKEN,
        access_token,
      },
    });

    // 메일 옵션
    //nodemailer example
    //https://nodemailer.com/about/#example
    const mailOptions = {
      from: process.env.SENDER_EMAIL_ADDRESS, // 보내는 사람의 이메일
      to: to, // 수신할 사람의 이메일
      subject: "Welcome to Uyeong blog app", // 메일 제목
      html: `
        <h2>Welcome to Uyeong Blog</h2>
        <p>${txt}</p>
      `, // 메일 내용(text도 가능)
    };

    // 메일 발송
    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export default sendEmail;
