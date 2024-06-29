import sanitizeMarkDown from "../utils/markdownSanitizer.js"

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){
        // sanitize the markdown for description
        try{
        problemData.description = sanitizeMarkDown(problemData.description)
        const problem  = await this.problemRepository.createProblem(problemData)
        return problem
        }catch(error){
            console.log(err.message)
            throw error
        }
    }

    async getAllProblems(){
        try{
            const allProblems = await this.problemRepository.getProblems()
            return allProblems
        }catch(error){
            console.log(err.message)
            throw error
        }
    }

    async getTheProblem(id){
        try{
            const problem = await this.problemRepository.getTheProblem(id)
            return problem
        }catch(error){
            console.log(error.message)
            throw error
        }
    }

    async updateTheProblem(id){
        try{
            sanitizedDescription = sanitizeMarkDown(req.body.description)
            req.body.description = sanitizedDescription
            problem = await this.problemRepository.updateTheProblem(req.body)
            return problem
        }catch(error){
            console.log(error)
            throw error
        }
    }

    async deleteTheProblem(id){
        try{
            await this.problemRepository.deleteTheProblem(id)
        }catch(error){
            console.log(error.message)
            throw error
        }
    }
}

export default ProblemService