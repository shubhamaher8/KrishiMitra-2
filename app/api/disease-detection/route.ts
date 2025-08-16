import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" });
    }

    // Forward request to FastAPI backend
    const backendRes = await fetch("http://127.0.0.1:8000/predict-disease", {
      method: "POST",
      body: formData,
    });

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
