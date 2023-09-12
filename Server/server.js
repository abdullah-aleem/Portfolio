const express= require('express')
const app=express()
const port = 3000

app.post('/sendMail',(req,res)=>{
    console.log("we did it")
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})