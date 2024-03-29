const app = require('./app')
const connectDB = require('./src/config/database.config.js')
const {PORT} = require('./src/config/server.js')

connectDB()

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})



