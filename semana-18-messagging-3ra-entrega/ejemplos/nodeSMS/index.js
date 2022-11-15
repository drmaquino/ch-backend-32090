import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const options = {
    from: '+18593408177',
    to: '+xxxxxxxxxxxxxxxxxx',
    body: 'Hola soy un SMS desde Node.js para la comision 31825!',
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
