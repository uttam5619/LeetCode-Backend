class UserService{

    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async createUser(userData){
        try{
            const user = await this.userRepository.createUser()
            return user
        }catch(err){
            console.log(err);
            console.log(err.message);
        }
    }

    async updateUser(userData){
        try{
            const user = await this.userRepository.updateUser()
            return user
        }catch(err){
            console.log(err);
            console.log(err.message);
        }
    }

    async deleteUser(userData){
        try{
            await this.userRepository.deleteUser()
        }catch(err){
            console.log(err);
            console.log(err.message);
        }
    }
     
}