const mongoose = require('mongoose')

const connectDB =()=>{
    connect.mongoose(process.env.DABASE_CONNECTION_STRING)
    .then((e)=>{
        console.log(`database connection established`)
    }).catch((err)=>{
        console.log(`database connection error: ${err.message}`)
        process.exit(1)
    })
}

module.exports = connectDB