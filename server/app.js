const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const sendGrid = require('@sendgrid/mail')

const app = express()

app.use(bodyparser.json())

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/', (req, res, next) => {
    res.send('API Status: Running')
})

app.post('/contact', (req, res, next) => {
    sendGrid.setApiKey(process.env.SENDGRID_API)
    const msg = {
        to: 'swarajrath007@gmail.com',
        from: req.body.email,
        subject: `From your website by ${req.body.name}`,
        text: req.body.message
    }

    sendGrid.send(msg).then(result => {
        res.status(200).json({
            success: true
        })
    }).catch(err => {
        console.log("Error sending email")
        res.status(401).json({
            success: false
        })
    })
})

module.exports = app


