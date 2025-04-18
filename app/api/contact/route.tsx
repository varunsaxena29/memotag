// app/api/waitlist/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Load Resend API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();
  const { email } = data;

  console.log("Received data:", data);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Ensure this email is verified on Resend
      to: email,
      subject: "Thanks for signing up!",
      html: `
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://ik.imagekit.io/b0oee7on0/MemoTag/memotag-logo.svg?updatedAt=1744711042877" alt="" style="max-width: 150px;">
    </div>
    <h2 style="text-align: center; color: #2b2b2b;">Thank You!</h2>
    <p style="font-size: 16px; line-height: 1.6;">
      Dear User,<br><br>
      Thank you for connecting with us. We truly appreciate your interest and the time you've taken to reach out. Our team will be in contact with you shortly to follow up and assist you further.<br><br>
      In the meantime, feel free to explore more about our services on our website or reach out if you have any urgent queries.
    </p>
    <p style="font-size: 16px; font-weight: bold;">Warm regards,<br>
    The MemoTag Team</p>
    <hr style="margin: 30px 0;">
    <p style="font-size: 12px; color: #888; text-align: center;">
      © 2025 MemoTag. All rights reserved.
    </p>
  </div>
</body>
`,
    });

    return NextResponse.json({ message: "Data received and email sent" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}
