import dotenv from 'dotenv'
import path from 'path'
import app from './app'

dotenv.config({
    path:path.resolve(__dirname, './.env')
})
const PORT = process.env.PORT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

app.listen(PORT,()=>{
    console.log("Server Status: OK", PORT)
})