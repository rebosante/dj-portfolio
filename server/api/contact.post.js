import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();
const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT * 1,
    secure: false,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD
    },
    tls: {
        ciphers:'SSLv3'
    }
});
export default defineEventHandler(async(event, response) => {
    try {
        const body = await readBody(event);

        // verify connection configuration
        await transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        await isValid(body).then(async (data) => {
            const mail = await transporter.sendMail({
                from: `"${data.name}" <${data.email}>`, 
                to: config.CONTACTMAIL, 
                subject: data.subject, 
                text: data.message, 
                html: data.message
            });
            // console.log('Message sent: %s', mail.messageId);
            // console.log('Preview URL: %s', nodemailer.
            // getTestMessageUrl(mail));
            return Promise.resolve();
        })
        .catch((errors) => {
            return Promise.reject(errors);
        })
        return 'success';
    }
    catch (error) {
        throw createError({ statusCode: 400, message: error})
    }
});

async function isValid(body) {
    const errors = [];
    if (validator.isEmpty(body.email || ''))
    errors.push({
        field: 'email',
        error: 'Field is required.'
    })
    if (validator.isEmpty(body.name || ''))
    errors.push({
        field: 'name',
        error: 'Field is required.'
    })
    if (validator.isEmpty(body.subject || ''))
    errors.push({
        field: 'subject',
        error: 'Field is required.'
    })
    if (validator.isEmpty(body.message || ''))
    errors.push({
        field: 'message',
        error: 'Field is required.'
    })
    if (!validator.isEmail(body.email || ''))
    errors.push({
        field: 'email',
        error: 'Field should be a valid email.'
    })
    if (errors.length > 0) {
        return Promise.reject(errors);
    } else {
        return Promise.resolve({
            email: validator.normalizeEmail(body.email),
            subject: validator.escape(body.subject),   
            name: validator.escape(body.name),   
            message: validator.escape(body.message)   
        })
    }
}