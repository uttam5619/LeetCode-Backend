import mongoose from "mongoose"

const connectDB =()=>{
    mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    .then((e)=>{
        console.log(`database connection established`)
    }).catch((err)=>{
        console.log(`database connection error: ${err.message}`)
        process.exit(1)
    })
}

export default connectDB