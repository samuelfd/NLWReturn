import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4eaefa8a36798d",
    pass: "6b862224d71561"
  }
});

export class NodemailerMailAdapetr implements MailAdapter{
  
  async sendMail({subject, body}: SendMailData){
     await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Samuel Ribeiro <samuelfd1234@gmail.com>',
      subject: subject,
      html: body
    }) 
  }
}