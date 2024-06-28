import Problem from "../model/problem.model.js";

class ProblemRepository {

    async createProblem(problemData){
        const problem = await Problem.create({
            title: problemData.title,
            description: problemData.description,
            difficuilty: problemData.difficuilty,
            testCases: (problemData?.testCases)? problemData.testCases : [],
            editorial: (problemData?.editorial)? problemData.editorial : 'to be specified'
        })
        return problem
        
    }

    async getProblems(){
        const allProblems = await Problem.find({})
        return allProblems
    }

    async getTheProblem(id){
        const doesProblemExist = await Problem.findById(id)
        if(!doesProblemExist){
            return resizeBy.status(404).json({
                success: false,
                message: 'problem not found'
            })
        }
        const problem = await Problem.findById(doesProblemExist._id)
        return problem
    }

    async updateProblem(id){
        const doesProblemExist = await Problem.findById(id)
        if(!doesProblemExist){
            return resizeBy.status(404).json({
                success: false,
                message: 'problem not found'
            })
        }
        const problem = await Problem.findByIdAndUpdate(doesProblemExist._id)
        return problem
    }

    async deleteProblem(id){
        const doesProblemExist = await Problem.findById(id)
        if(!doesProblemExist){
            return resizeBy.status(404).json({
                success: false,
                message: 'problem not found'
            })
        }
        await Problem.findByIdAndDelete(doesProblemExist._id)
    }
}

export default ProblemRepository