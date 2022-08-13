const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

function sendEmail(sendersEmail, subject, body) {
    fs.readFile(path.join(__dirname, '../.secrets/gmail_credentials.txt'), 'utf8', (err,data) => {
        if (err) {
            console.log(err);
        }else if (data) {
            data = data.split('\n');
            const username = data[0];
            const password = data[1];

            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: username,
                    pass: password,
                }
            });
        
            let mailDetails = {
                from: sendersEmail,
                to: 'telephoneemail@protonmail.com',
                subject: subject,
                text: ` - Sent By: -
                        -----------
                        ${sendersEmail}
                        -----------
                        \n\n${body}`,
            };
            
            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log(err);
                }
            });
        }
    });
}

router.post('/api/contact', (req, res) => {
    data = req.body; // JavaScript object containing the parse JSON

    sendEmail(data.sendersEmail, data.subject, data.body);

    res.sendStatus(200);
});


module.exports = router;
