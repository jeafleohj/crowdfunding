  //to: 'mymail@mail.com, mymail2@mail.com', // list of receivers (who receives)
  //  subject: 'Hello ', // Subject line
  //  text: 'Hello world ', // plaintext body
  //  html:

}
//const nodemailer = require('nodemailer'),
//    ejs = require('ejs'),
//    path = require('path')
//
//async function mailing({ filename, data, to, subject, attachments }) {
//    const file_path = path.join(__base, 'mails', filename)
//    const html = await ejs.renderFile(file_path, data, { async: true })
//
//    const transporter = nodemailer.createTransport({
//        host: 'smtp.gmail.com',
//        port: 465,
//        secure: true,
//        auth: {
//            user: "empresario@prestamype.com",
//            pass: "#logros0204!"
//        }
//    });
//
//    const options = {
//        from: `Prestamype <empresario@prestamype.com>`,
//        to,
//        subject,
//        generateTextFromHtml: true,
//        attachments,
//        html
//    }
//    transporter.sendMail(options, (err, info) => {
//        if (err) console.log(err)
//        else console.log('Message sent', info.response)
//    })
//}
