import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import authRoute from './src/routes/v1/auth.route.js';
import userRoute from './src/routes/v1/user.route.js';
import problemRoute from './src/routes/v1/problem.route.js';
import appRouter from './src/routes/base.route.js';
const app = express();

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*
app.use('/leetcode/v1/auth',authRoute)
app.use('/leetcode/v1/user',userRoute)
app.use('/leetcode/v1/problem',problemRoute)
*/

app.use('/leetcode', appRouter)

app.get('*', (req,res)=>{
    return res.status(404).json({success: false, message:`Resource not found`})
})

export default app