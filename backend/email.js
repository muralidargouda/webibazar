const nodemailer=require('nodemailer')

const reset_password_email=(fname,email,resetToken)=>{
    try{
         const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:false,
            requireTLS:true,
            auth:{
                user:process.env.email,
                pass:process.env.password,
            },
            debug:true,
         })
         const mailOptions={
            from:process.env.email,
            to:email,
            subject:"To reset the Password",
            html: `
            <p> ${fname} you are receiving this email because you have requested the reset of the password for your account.</p>
            <p>Please click on the following link to complete the process:</p>
            <a href="http://localhost:5000/user/reset_password/${resetToken}">Reset Password</a>
            or copy paste "http://localhost:5000/user/reset_password/${resetToken}"
            <p>Ignore this email if you did not request this and your password will remain unchanged.</p>`
         }
         transporter.sendMail(mailOptions,function(error,info){
            if(error)
            {
                console.log(error)
            }
            else{
                 console.log("mail has been sent",info.response)
            }
         });
    }
    catch(err)
           { console.log(err.message)}
    }

module.exports=reset_password_email;