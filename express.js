import express from 'express'
import mysql from 'mysql2'

const conn = mysql.createConnection({host:'localhost',user:'root',password:'',database:'juice store'})
const app = express()
app.use(express.json())

app.post("/login",(req,res)=>{
    try {
        const   {username,password} = req.body
        console.log(req.body)
        res.sendStatus(200)
 
    } catch (error) {
        console.log(error)
    }
 

})

app.listen(9999,()=>{
    console.log('listen at port 9999')
})