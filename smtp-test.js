
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "no-reply@studentpaddy.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  
});

const mailOptions = {
  from: "no-reply@studentpaddy.com",
  to: "arinzeowoh@gmail.com",
  subject: "Hello from Nodemailer!",
  text: "This is a test email sent from a Node.js script using Outlook SMTP.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
