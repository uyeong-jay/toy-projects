const nodemailer = require("nodemailer");
import { OAuth2Client } from "google-auth-library";

//메일 발송 함수  > 메일 발송 정보 준비 > 메일 발송 정보 생성 > 메일 발송 내용 > 메일 발송

//0) 보내는 사람 받는 사람 이메일 정하기
// - 보내는 사람: wjacob2103@gmail.com
// - 받는 사람: wwjjss2104@gmail.com
//1)https://console.developers.google.com - clientID, clientSecret 받기 (clientID에서 .apps.googleusercontent.com 는 제외하고 모든 곳에 활용)
//2)https://developers.google.com/oauthplayground/ - 우측상단 톱니바퀴 > 하단 Use your own OAuth credentials 클릭 > OAuth Client ID, OAuth Client secret 채우기 > Authorize APIs: http://mail.google.com 넣기 > Exchange authorization code for tokens 클릭 > refreshToken 받기

//https://okky.kr/article/486534 - redirect uri 과정
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const sendEmail = async (to: string, txt: string, url: string) => {
  //OAuth2 example
  //https://github.com/googleapis/google-auth-library-nodejs#a-complete-oauth2-example
  //아래 정보들은 테스크 계정이라 7일 후 만료됨(새 프로젝트 or 프로덕션 이용하기)

  //메일 발송 인증 정보 넣기
  //에러: GaxiosError: unauthorized_client
  //해결: https://github.com/nodemailer/nodemailer/issues/564
  const oAuth2Client = new OAuth2Client(
    process.env.MAIL_CLIENT_ID,
    process.env.MAIL_CLIENT_SECRET,
    REDIRECT_URI
  );

  //인증 하기
  oAuth2Client.setCredentials({
    refresh_token: process.env.MAIL_REFRESH_TOKEN,
  });

  try {
    //인증된 토큰 받아오기
    const access_token = await oAuth2Client.getAccessToken();

    //nodemailer example
    //https://nodemailer.com/smtp/oauth2/#oauth-3lo
    //https://nodemailer.com/smtp/oauth2/#example-3

    //메일 발송 정보 생성
    const transport = nodemailer.createTransport({
      service: "gmail", //어느 메일을 이용할지
      // host: "smtp.gmail.com",
      // port: 465,
      // secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.SENDER_EMAIL_ADDRESS,
        clientId: process.env.MAIL_CLIENT_ID,
        clientSecret: process.env.MAIL_CLIENT_SECRET,
        refreshToken: process.env.MAIL_REFRESH_TOKEN,
        access_token,
      },
    });

    // 메일 발송 내용
    //nodemailer example
    //https://nodemailer.com/about/#example
    const mailOptions = {
      from: process.env.SENDER_EMAIL_ADDRESS, // 보내는 사람의 이메일
      to: to, // 수신할 사람의 이메일
      subject: "Welcome to Uyeong blog app", // 메일 제목
      html: `
        <h2>Welcome to Uyeong Blog</h2>
        <p>${txt}</p>
      `, // 보낼 내용(text도 가능)
    };

    // 메일 발송
    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (err) {
    console.error(err);
  }
};

export default sendEmail;
//사용: sendEmail(account, txt, url);
