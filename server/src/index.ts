import dotenv from 'dotenv'
import path from 'path'
import app from './app'
import connectToDb from './db/connection'
dotenv.config({
    path:path.resolve(__dirname, './.env')
})
const PORT = process.env.PORT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

connectToDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Status: OK", PORT)
    })
})
.catch((error)=>{
    console.log('error' , error)
    process.exit(1)
})