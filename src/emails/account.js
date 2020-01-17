const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'VladyslaV@gail.com',
        subject: 'Welcome',
        text: `Welcome to the app, ${name}. Let me know what do u think about this app`
    })
}

const sendGoodbyeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'VladyslaV@gail.com',
        subject: 'Goodbye',
        text: `Goodbye, ${name}. Let us know what was wrong`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}