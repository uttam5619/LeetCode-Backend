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
}

export default ProblemService