import nodemailer from 'nodemailer'

const transportParams = {
	host: process.env.NODEMAILER_HOST,
	port: process.env.NODEMAILER_PORT,
	secure: Boolean(process.env.NODEMAILER_SECURE), // Use `true` for port 465, `false` for all other ports
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.NODEMAILER_PASSWORD
	}
}

// const transportParams = {
	// host: 'smtp.yandex.ru',
	// port: 465,
	// secure: true, // Use `true` for port 465, `false` for all other ports
	// auth: {
		// user: 'lite-crm',
		// pass: 'urlxajhspgwnjtlg'
	// }
// }

const nodemailerTransportSingleton = () => {
	return nodemailer.createTransport(transportParams)
}

declare const globalThis: {
	nodemailerTransportGlobal: ReturnType<typeof nodemailerTransportSingleton>
} & typeof global

const nodemailerTransport = globalThis.nodemailerTransportGlobal ?? nodemailerTransportSingleton()

export default nodemailerTransport

if (process.env.NODE_ENV !== 'production') globalThis.nodemailerTransportGlobal = nodemailerTransport

export async function sendEmail(email: string, subject: string, text: string, html: string) {
	const info = await nodemailerTransport.sendMail({
		from: '"Lite CRM" <lite-crm@yandex.ru>',
		to: email,
		subject,
		text,
		html
	})
	// console.log(info)
	return info.messageId
}
