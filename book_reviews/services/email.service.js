import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to, subject, text) => {
  try {
    const emailData = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
    };
    await transporter.sendMail(emailData);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
