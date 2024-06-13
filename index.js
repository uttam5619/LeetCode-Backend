import app from './app.js'
import connectDB from './src/config/database.config.js'
import {PORT} from './src/config/server.config.js'
import AppError from './src/utils/error.js'

connectDB()

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
    //throw new AppError('server down',500, 'server is not responding')
})


