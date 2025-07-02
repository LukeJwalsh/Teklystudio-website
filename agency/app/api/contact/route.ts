import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        message,
      } = await req.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,  
          pass: process.env.SMTP_PASS,  
        },
      });

      const mailOptions = {
        from: `"Tekly Studios Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER,  
        subject: "New Contact Form Submission",
        html: `
          <h1>Contact Form</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      console.error("Email send error:", error);
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json("method not allowed");
  }
}
