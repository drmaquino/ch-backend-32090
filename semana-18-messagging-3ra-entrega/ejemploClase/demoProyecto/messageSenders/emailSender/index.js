import NodemailerEmailSender from './NodemailerEmailSender.js';
import { nodemailerPass, nodemailerUser } from '../../config.js';

const configData = {
    service: 'gmail',
    port: 587,
    auth: {
        user: nodemailerUser,
        pass: nodemailerPass
    }
}

export const clienteMail = new NodemailerEmailSender(configData)