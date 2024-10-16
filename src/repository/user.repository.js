import { User } from "../model/user.model";

class UserRepository {

    async createUser(userData){
        const user = await User.create({
            name: userData.name,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            description: userData.description ? userData.description: "Hi there, i am using this platform "
        })
        return user;
    }

    async updateUser(userData){
        const doesUserExist = await User.findById(userData.id);
        if(!doesUserExist){
            return res.status(404).json({
                success:"false",
                message: "User not found"
            });
        }
        const user = await User.findByIdAndUpdate(userData.id)
        return user;
    }

    async deleteUser(userData){
        const doesUserExist = await User.findById(userData.id);
        if(!doesUserExist){
            return res.status(404).json({
                success: "false",
                message:"User not found"
            })
        }
        await User.findByIdAndDelete(doesUserExist._id);
    }

}