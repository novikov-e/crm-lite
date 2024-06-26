import { sendEmail } from "_utils/email";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function GET() {
	console.log(`<a href="${process.env.APP_URL}${randomUUID()}"></a>`)
	await sendEmail('noved256@yandex.ru', 'Test subject', 'Test text', `<a href="${process.env.APP_URL}/confirm_email/${randomUUID()}">Подтвердить адрес электронной почты</a>`)
	return NextResponse.json({})
}
