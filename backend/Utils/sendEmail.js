import { config } from "dotenv";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const { to, subject, resetToken } = options;
  const mailOpt = {
    from: process.env.EMAIL_FROM,
    to: to,
    subject: subject,
    html: `
    <h1>You have requested a password rest</h1>
    <p>Please go to this link to reset your password</p>
    <a href=http://localhost:3000/passwordreset/${resetToken} clicktracking=off>http://localhost:3000/passwordreset/${resetToken}</a>
  `,
  };
  transporter.sendMail(mailOpt, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });
};

export default sendEmail;
