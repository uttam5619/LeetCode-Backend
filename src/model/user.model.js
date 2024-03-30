import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema =new Schema({
    name: {
        type: String,
        required: [true,`name is required`],
        trim: true,
        lowercase: true,
        minLength:[2,`name should contain atleast 2 characters`],
        maxLength:[50, `name should not contain more than 50 characters`]
    },
    username: {
        type: String,
        required: [true,`user name is required`],
        trim: true,
        lowercase: true,
        unique: true,
        index: true,
        minLength:[6,`the name should contain atleast 2 characters`],
        maxLength:[60, `the name should not contain more than 50 characters`]
    },
    email: {
        type: String,
        required: [true,`email is required`],
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true,`password is required`],
        trim: true,
        select:false,
        minLength:[6,`password should contain atleast 6 characters`],
        maxLength:[60, `password should not contain more than characters`]
    },
    avatar:{
        public_id:{
            type: String, //cloudinary
            required: [true,`public_id is required`],
        },
        secure_url:{
            type: String, //cloudinary
            required: [true,`secure_url is required`],
        }
    },
    role: {
        type: String,
        enum: [`user`, `admin`],
        admin: 'user'
    }
},{timestamps:true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt(this.password, 10)
    next()
})

userSchema.method ={
    generateAccessToken: async function(){
        return await jwt.sign(
            {id:this._id, username:this.username, email:this.email, role:this.role},
            process.env.ACCESS_SECRET_TOKEN,
            {expiresIn: '5m'}
        )
    },
    comparePassword: async function(password){
        return await bcrypt.compare(password, this.password)
    }
}

export const User =model('User', userSchema)