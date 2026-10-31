import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ status: "ok", application: "@app/braling-ecommerce", timestamp: new Date().toISOString() }); }
