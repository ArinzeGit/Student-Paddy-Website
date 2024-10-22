import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "DoNotReply@studentpaddy.com", 
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { category, firstName, lastName, email, subject, message } = await request.json();

  if (!email || !firstName || !lastName || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Email to community@studentpaddy.com
  const mailOptionsToCommunity = {
    from: "DoNotReply@studentpaddy.com",
    to: "community@studentpaddy.com",
    replyTo: email, // Set the replyTo as user's email
    subject: `New Contact Us Message: ${subject}`,
    text: `You have received a new message from ${firstName} ${lastName} (${email}).\n\nCategory: ${category}\nMessage: ${message}`,
  };

  // Confirmation email to the user
  const mailOptionsToUser = {
    from: "DoNotReply@studentpaddy.com",
    to: email,
    replyTo: "community@studentpaddy.com",
    subject: "We have received your message",
    text: `Dear ${firstName},\n\nThank you for contacting us! We have received your message and will get back to you shortly.\n\nBest regards,\nStudent Paddy Team`,
  };

  try {
    // Send both emails
    await transporter.sendMail(mailOptionsToCommunity);
    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
