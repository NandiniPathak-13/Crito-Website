import express from 'express'
import dotenv from 'dotenv'
import DbConn from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
import cookieParser from 'cookie-parser'
import BlogsRoutes from './routes/Blog.js'
import DashboardRoutes from './routes/Dashboard.js'
import cors from 'cors'
import PublicRoutes from './routes/Public.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

const corsOptions={
   origin: "https://crito-website.vercel.app",
  credentials: true,      
   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]   
}

//database connection
DbConn()

app.use(express.static('public'))
app.use(cors(corsOptions))
app.options("*", cors(corsOptions))
app.use(cookieParser())
app.use(express.json())


app.get("/", (req , res)=>{
res.send("hello from bakend")
})

app.use('/auth',AuthRoutes)
app.use('/blog',BlogsRoutes)
app.use('/dashboard',DashboardRoutes)
app.use('/public',PublicRoutes)



app.listen(PORT,()=>{
    console.log(`app is running on PORT ${PORT}`)
})
 
