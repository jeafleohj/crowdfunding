import nodemailer from 'nodemailer'
export type InfoEmail = {
  to: string
  subject: string
  html: string
}

export async function mailing({to, subject, html}: InfoEmail) {
  const transport = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'crowdfunding1999@hotmail.com',
      pass: 'shingeki321',
    },
    tls: {
      rejectUnauthorized: false
    },
  })
  let info = await transport.sendMail({
    from: 'crowdfunding1999@hotmail.com',
    to,
    subject,
    html,
  });
  return info
}
