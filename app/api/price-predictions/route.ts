import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, crop, district, state, date } = body;

    let backendUrl = "";
    if (type === "daily") backendUrl = "http://127.0.0.1:8000/forecast/daily";
    else if (type === "weekly") backendUrl = "http://127.0.0.1:8000/forecast/weekly";
    else return NextResponse.json({ success: false, error: "Invalid type" }, { status: 400 });

    // Fetch forecast
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop, district, state, date }),
    });

    if (!response.ok)
      return NextResponse.json({ success: false, error: "Backend request failed" }, { status: response.status });

    const data = await response.json();

    // Fetch plot as blob
    const plotResponse = await fetch("http://127.0.0.1:8000/plot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop, district, state }),
    });

    if (!plotResponse.ok) return NextResponse.json({ ...data, plotUrl: null });

    const plotBlob = await plotResponse.blob();
    const plotUrl = URL.createObjectURL(plotBlob);

    return NextResponse.json({ ...data, plotUrl });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
