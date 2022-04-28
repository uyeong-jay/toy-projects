import nodemailer from "nodemailer";
import { OAuth2Client } from "google-auth-library";

const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.MAIL_CLIENT_SECRET}`;
const REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
const SENDER_EMAIL = `${process.env.SENDER_EMAIL_ADDRESS}`;

const sendEmail = async (to: string, url: string, txt: string) => {
  //Create an oAuth client to authorize the API call
  const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

  //Make sure to set the credentials on the OAuth2 client.
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const access_token = await oAuth2Client.getAccessToken();
  } catch (err) {
    console.log(err);
  }
};
