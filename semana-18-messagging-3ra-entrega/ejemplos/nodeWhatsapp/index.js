import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const mensaje = {
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+xxxxxxxxxxxxxxxx',
    body: 'Hola soy un WSP desde Node.js usando Twilio!',
}

try {
    const message = await client.messages.create(mensaje)
    console.log(message)
} catch (error) {
    console.log(error)
}
