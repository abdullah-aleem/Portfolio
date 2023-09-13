const express= require('express')
const app=express()
const port = 3000
const cors=require('cors')
app.use(cors())
app.use(express.json())
//intailising nodemailer
const mailer=require('nodemailer');
const tranporter=mailer.createTransport({
    service:'Gmail',
    auth:{
        user:'abdullahaleem2102@gmail.com',
        pass:'soxryzagdbyxxxqe'
    }
});



app.post('/sendMail',(req,res)=>{
    console.log("we did it")
    
    //first find its IP
    const Ip=req.ip;
    console.log(req.body)
    //Send Email
    const mail={
        from:"abdullahaleem2102@gmail.com",
        to:'aaleem.bscs21seecs@gmail.com',
        subject:'Important From Portfolio ',
        text:req.body.message
    }
    tranporter.sendMail(mail,(error,info)=>{
        if(error){
            console.error(error)
        }
        else{
            console.log(info.response)
        }
    });    
    res.send(JSON.stringify({message:"send"}))
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})