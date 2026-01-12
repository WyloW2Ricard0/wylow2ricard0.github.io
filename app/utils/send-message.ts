'use server'

import nodemailer from 'nodemailer'
import { propMessage } from '../components/form-contact'

/** Fonction pour envoyer un message de contact via Outlook */
export async function sendMessage(data: propMessage) {

  console.log("account created:");
  console.log("  User: %s", process.env.OUTLOOK_USER);
  console.log("  Pass: %s", process.env.OUTLOOK_PASSAPP);

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      type: 'OAuth2',
      user: process.env.OUTLOOK_USER,
      clientId: process.env.AZURE_CLIENT_ID,
      clientSecret: process.env.AZURE_CLIENT_SECRET,
      refreshToken: process.env.AZURE_REFRESH_TOKEN,
      accessToken: process.env.AZURE_REFRESH_TOKEN,
    },
  })

  console.log("Server is ready to take our messages", await transporter.verify());

  const mailOptions = {
    // recevoire l'email
    from: process.env.OUTLOOK_USER,
    to: process.env.OUTLOOK_USER,
    replyTo: data.email,
    subject: data.subject,
    text: data.message,
  }


  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent:", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return info;
  } catch (err) {
    console.error("Error while sending mail", err);
    if (err.response) {
      console.error("SMTP Response:", err.response);
    }
    throw err;
  }
}
