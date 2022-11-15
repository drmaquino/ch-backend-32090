import { createTransport } from 'nodemailer';

const transport = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jack.fadel21@ethereal.email',
        pass: 'G7hK6DVsh8NT2qzJ3B'
    }
});

const TEST_MAIL = 'profe_marian@gmail.com'

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

try {
    const info = await transport.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}
