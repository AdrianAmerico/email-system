import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { NODEMAILER_PASS, NODEMAILER_USER } = process.env;
console.log(NODEMAILER_PASS, NODEMAILER_USER);

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: `${NODEMAILER_USER}`,
    pass: `${NODEMAILER_PASS}`
  }
});

export default transporter;
