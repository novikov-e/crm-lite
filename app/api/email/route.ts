import { sendEmail } from "_utils/email";

export async function GET() {
	sendEmail('noved256@yandex.ru', "Test subject", 'Test text', '<>Hello!</h1>')
	return Response
}
