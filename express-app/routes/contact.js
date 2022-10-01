const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

require('dotenv').config()

const router = express.Router();

function sendEmail(sendersEmail, subject, body) {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env['GMAIL_ADDRESS'],
            pass: process.env['GMAIL_PASSWORD'],
        }
    });

    let mailDetails = {
        from: sendersEmail,
        to: 'business@scottwyman.me',
        subject: subject,
        text: ` Sent By --> ${sendersEmail}
                \n\n
                ---------------------------
                \n
                ${body}`,
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
        }
    });
}


router.post('/', (req, res) => {
    data = req.body; // JavaScript object containing the parse JSON

    sendEmail(data.sendersEmail, data.subject, data.body);

    res.sendStatus(200);
});


module.exports = router;
