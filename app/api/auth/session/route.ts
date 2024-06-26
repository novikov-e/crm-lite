import { NextResponse } from "next/server";

export async function GET() {
	console.log('GET session');
	
	return NextResponse.json({})
}
