var express=require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var app=express();

var transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "emailID@gmail.com",
        pass: "your_app_secret" // Generate: https://support.google.com/accounts/answer/185833
    }
})
);

var mailOptions={
    
            from: 'emailID@gmail.com',
            to : 'destinationmail@domain.com',
            subject : 'Test Sub.',
            text : 'Test TxT'
    
        };
        
console.dir(mailOptions);
        
transporter.sendMail(mailOptions, function(error, info) {
        
   if (error) {
               console.log(error);
                
              } else {
               console.log(info);
              }
        });
        // close connection 
        transporter.close();
