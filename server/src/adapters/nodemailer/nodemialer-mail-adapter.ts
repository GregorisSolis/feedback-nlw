import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f9be25368e9326",
    pass: "6d96f593e05385"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({subject, body}: SendMailData){
		await transport.sendMail({
			from: 'Team Feedget <oi@feedget.com>',
			to: 'Gregoris Adrian <elpandagreigo@gmail.com>',
			subject,
			html: body
		})
	}
}