import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())

//api endpoints

app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
// localhost:4000/api/admin/add-doctor
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING GREAT')
})

app.listen(port, ()=> console.log("server started",port))




















// What is CORS?

// CORS is a security feature built into browsers that restricts web pages from making requests to a different domain (origin) than the one that served the page.

// For example:

// Your frontend (React app) is running at http://localhost:3000

// Your backend (Express app) is running at http://localhost:5000

// By default, the browser blocks requests from 3000 → 5000 because they are different origins.