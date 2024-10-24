const nodemailer = require("nodemailer");

const testTransporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "no-reply@studentpaddy.com", // Your email
    pass: process.env.EMAIL_PASSWORD,  // Your password from environment variables
  },
});

testTransporter.verify((error, success) => {
  if (error) {
    console.log("Error with SMTP connection:", error);
  } else {
    console.log("SMTP connection is valid!");
  }
});
