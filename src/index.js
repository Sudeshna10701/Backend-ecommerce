import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
dotenv.config()
import cors from 'cors'
import authroute from './routes/authroute'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/productRoutes'


const app = express()
const port = process.env.PORT || 3003

connectDB()

app.use(cors())
app.use(express.json())

//route to handle auth requests
app.use("/api/v1/auth", authroute)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)


app.listen(port, (req, res) => {
    console.log(`Server listening at PORT ${port}`)
})