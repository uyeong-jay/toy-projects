import nodemailer from "nodemailer";
import { OAuth2Client } from "google-auth-library";

const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.MAIL_CLIENT_SECRET}`;
const REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
const SENDER_EMAIL = `${process.env.SENDER_EMAIL_ADDRESS}`;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const sendEmail = async (to: string, url: string, txt: string) => {
  //OAuth2 example
  //https://github.com/googleapis/google-auth-library-nodejs#a-complete-oauth2-example
  const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    //타입 에러: GetAccessTokenResponse
    //해결: yet
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60109
    const access_token: any = await oAuth2Client.getAccessToken();

    //nodemailer example
    //https://nodemailer.com/smtp/oauth2/#oauth-3lo
    //https://nodemailer.com/smtp/oauth2/#example-3
    const transport = nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: SENDER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: access_token,
      },
    });

    //nodemailer example
    //https://nodemailer.com/about/#example
    const mailOptions = {
      from: SENDER_EMAIL,
      to,
      subject: "Uyeong Blog",
      html: `
        <h2>Welcome to Uyeong Blog</h2>
        <p>${txt}</p>
        <div>${url}</div>
      `,
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export default sendEmail;
