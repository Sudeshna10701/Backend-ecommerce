import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
dotenv.config()
import cors from 'cors'
import authroute from './routes/authroute'

const app = express()
const port = process.env.PORT || 3003

connectDB()

app.use(cors())
app.use(express.json())

//route to handle auth requests
app.use("/api/v1/auth", authroute)


app.listen(port, (req, res) => {
    console.log(`Server listening at PORT ${port}`)
})