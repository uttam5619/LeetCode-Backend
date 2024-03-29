import app from './app.js'
import connectDB from './src/config/database.config.js'
import {PORT} from './src/config/server.config.js'

connectDB()

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})


