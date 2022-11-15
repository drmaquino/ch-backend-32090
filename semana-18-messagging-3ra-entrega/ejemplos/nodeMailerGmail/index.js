import { createTransport } from 'nodemailer';

const transport = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'xxxxxxxxxxxxx@gmail.com',
        pass: process.env.GOOGLE_PASS
    }
});

const TEST_MAIL = 'jack.fadel21@ethereal.email'

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
        {
            path: './nodemailer.png'
        }
    ]
}

try {
    const info = await transport.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}
