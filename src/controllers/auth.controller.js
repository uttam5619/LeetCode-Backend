import { User } from "../model/user.model.js"
import { profileLogo } from "../utils/constants.js"
import AppError from "../utils/error.js"




const signUp= async (req,res)=>{
    const { name, username, email, password } = req.body
    if(!email || !password || !name || !username){
        throw new AppError('empty fields',400,'provide all the mandatory details')
    }
    try{
        const isUserAlreadyRegistered= await User.findOne({email})
        if(!isUserAlreadyRegistered) throw new AppError('user not found', 404, 'user not found with given email')
        const user = await User.create(
            {
                name,
                username,
                email,
                password,
                avatar:{
                    public_id: email,
                    secure_url: profileLogo
                }
            }
        )
        user.save()
    }catch(err){
        console.log(err.message, err)
    }
}

const signIn=(req,res)=>{

}

const logOut=(req,res)=>{

}

export {
signUp,
signIn,
logOut
}