var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "emailID@gmail.com",
        pass: "your_app_secret"
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
