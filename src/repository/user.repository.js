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
        const user = await User.findByIdAndUpdate(doesUserExist._id);
        return user;
    }

    async getUser(userData){
        const user = await User.findById(userData.id);
        return user;
    }

    async getAllUsers(userData){
        const allUsers = await User.find({})
        return allUsers
    }

    async deleteUser(userData){
        const doesUserExist = await User.findById(userData.id);
        await User.findByIdAndDelete(doesUserExist._id);
    }

}