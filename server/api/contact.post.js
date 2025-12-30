import nodemailer from 'nodemailer'
import validator from 'validator'
const config = useRuntimeConfig()
const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT * 1,
    secure: true,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD
    }
})
export default defineEventHandler(async(event) => {
    try {
        // Robust body parsing that works on Vercel Lambda (no readBody/readRawBody)
        const body = await parseBody(event)

        // verify connection configuration
        await transporter.verify(function (error, success) {
            if (error) {
                console.log(error)
            } else {
                console.log("Server is ready to take our messages")
            }
        })

        await isValid(body).then(async (data) => {
            const mail = await transporter.sendMail({
                from: `"${data.name}" <${data.email}>`,
                to: config.CONTACTMAIL,
                subject: data.subject,
                text: data.message,
                html: data.message
            })
            // console.log('Message sent: %s', mail.messageId)
            // console.log('Preview URL: %s', nodemailer.
            // getTestMessageUrl(mail))
            return Promise.resolve()
        })
        .catch((errors) => {
            return Promise.reject(errors)
        })
        return 'success'
    }
    catch (error) {
        throw createError({ statusCode: 400, message: error})
    }
})

async function parseBody(event) {
    // 1) If Vercel already parsed it
    const parsed = event?.node?.req?.body || event?.body
    if (parsed) return parsed

    // 2) Manual stream read (compatible with Vercel/Edge where req.text() is missing)
    const req = event?.node?.req
    if (!req) {
        throw createError({ statusCode: 400, message: 'Request object missing' })
    }

    const raw = await new Promise((resolve, reject) => {
        let data = ''
        req.on('data', (chunk) => { data += chunk })
        req.on('end', () => resolve(data))
        req.on('error', reject)
    })

    if (!raw) {
        throw createError({ statusCode: 400, message: 'Request body is empty' })
    }

    try {
        return JSON.parse(raw)
    } catch (err) {
        throw createError({ statusCode: 400, message: 'Invalid JSON body' })
    }
}

async function isValid(body) {
    const errors = []
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
        return Promise.reject(errors)
    } else {
        return Promise.resolve({
            email: validator.normalizeEmail(body.email),
            subject: validator.escape(body.subject),
            name: validator.escape(body.name),
            message: validator.escape(body.message)
        })
    }
}
