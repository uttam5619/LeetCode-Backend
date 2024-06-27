import Problem from "../model/problem.model.js";

class ProblemRepository {

    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficuilty: problemData.difficuilty,
                testCases: (problemData?.testCases)? problemData.testCases : [],
                editorial: (problemData?.editorial)? problemData.editorial : 'to be specified'
            })
            return problem
        }catch(err){
            console.log(err.message);
            throw err
        }
        
    }
}

export default ProblemRepository