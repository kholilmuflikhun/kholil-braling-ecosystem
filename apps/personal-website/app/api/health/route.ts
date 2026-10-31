import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ status: "ok", application: "@app/personal-website", timestamp: new Date().toISOString() }); }
