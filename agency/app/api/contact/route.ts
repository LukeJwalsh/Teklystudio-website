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
          user: "lukejwalsh1701@gmail.com",
          pass: "pjfq hccu xhle onbt",
        },
      });

      const mailOptions = {
      from: `"Tekly Studios Contact" <${process.env.SMTP_USER}>`,
      to: "lukejwalsh1701@gmail.com",
      subject: "New Contact Form Submission",
      html: `
         <h1>Contact Form</h1>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
      `,
    };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}
