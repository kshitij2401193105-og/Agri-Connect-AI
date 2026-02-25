import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  return NextResponse.json({
    crop: data.crop,
    stage: "Vegetative",
    health: "Good",
    suggestion: "Water after 4–5 days",
  });
}