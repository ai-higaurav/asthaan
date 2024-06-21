import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin:"*",
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))
app.use(express.json({
    limit:"16kb"
}))
app.use(cookieParser())

// importing routes
import property from './routes/property'

app.use('/api/v1/property', property)
export default app;