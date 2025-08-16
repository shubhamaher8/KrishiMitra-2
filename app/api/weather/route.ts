// app/api/weather/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  if (!lat || !lon) {
    return NextResponse.json({ success: false, error: "Missing coordinates" });
  }

  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    return NextResponse.json({ success: true, data: data.current_weather });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
