import { User } from "../model/user.model"

const isLoggedIn = async (req, res)=>{

    const {token} = req.cookies
    console.log(token)

    if(!token){
        return req.status(401).json({
            success: false,
            message: "Access denied"
        })
    }

    const decodedPayload = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN)
    const user = await User.findById(decodedPayload.id)
    if(!user){
        return req.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    return user
}

export { isLoggedIn }