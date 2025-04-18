import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  console.log("Supabase URL:", process.env.SUPABASE_URL);
  console.log("Service Role Key:", process.env.SUPABASE_SERVICE_ROLE_KEY);
  const data = await req.json();
  console.log("Received data:", data);

  const { name, email, phone, choice, others } = data;

  const { error } = await supabase.from("waitlist").insert([
    {
      name,
      email,
      phone,
      choice,
      others,
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json(
      { message: "Error storing data" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Data stored successfully" });
}
