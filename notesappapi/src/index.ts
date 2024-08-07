import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'


dotenv.config()
connectDB()


const app = express()


const PORT = process.env.PORT


app.listen(PORT,()=>console.log("listening port is localhost: 5000 with mongoodb connection"))


