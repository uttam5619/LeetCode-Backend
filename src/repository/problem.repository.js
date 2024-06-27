import Problem from "../model/problem.model";

class problemRepository {

    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficuilty: problemData.difficuilty,
                teastCases: (problemData?.testCases)? problemData.testCases : [],
                editorial: (problemData?.editorial)? problemData.editorial : []
            })
            if(!problem){
                return resizeBy.status(400).json({message: 'failed to create the problem'})
            }
            return problem
        }catch(err){
            console.log(err.message);
            throw err
        }
        
    }
}

export default problemRepository