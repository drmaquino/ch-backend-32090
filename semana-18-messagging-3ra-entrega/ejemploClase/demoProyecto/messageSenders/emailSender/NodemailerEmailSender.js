import { createTransport } from 'nodemailer';

export default class NodemailerEmailSender {
    #transporter

    constructor(configData) {
        this.#from = configData.auth.user
        this.#transporter = createTransport(configData);
    }

    async enviar({ asunto, destinatario, mensaje, adjuntos = [] }) {

        const mailOptions = {
            from: this.#from,
            to: destinatario,
            subject: asunto ?? 'sin asunto',
            html: mensaje,
            attachments: adjuntos
        }

        try {
            return await this.#transporter.sendMail(mailOptions)
        } catch (error) {
            const customError = new Error(error.message)
            customError.tipo = 'ERROR_MENSAJERIA'
            throw customError
        }
    }
}