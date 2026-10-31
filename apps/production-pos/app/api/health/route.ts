import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ status: "ok", application: "@app/production-pos", timestamp: new Date().toISOString() }); }
