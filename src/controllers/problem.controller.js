import { STATUS_CODE } from "../utils/constants.js"
import ProblemService from "../services/problem.service.js"
import ProblemRepository from "../repository/problem.repository.js"

const problemService = new ProblemService( new ProblemRepository())

const addProblem=async (req,res)=>{

    try{

        const { title, description, difficulty, testCases, editorial } = req.body
        if(!title || !description || !difficulty){
            return res.status(400).json({
                message: "provide title, description and difficuilty and testCases"
            })
        }
        
        const problem = await problemService.createProblem(req.body)
        if(!problem){
            return res.status(400).json({
                success: false,
                message: 'failed to add given problem to the problem list'
            })
        }
        return res.status(201).json({
            success: true,
            message: 'problem added successfully',
            data: problem
        })

    }catch(error){
        console.log(error.message)
    }

}

const getProblem=(req,res)=>{
    try{

    }catch(error){
        console.log(error.message)
    }
}

const updateProblem=(req,res)=>{
    try{

    }catch(error){
        console.log(error.message)
    }
}   

const deleteProblem=(req,res,next)=>{
    try{

    }catch(error){

    }
}

const getProblems=(req,res)=>{
    try{

    }catch(error){

    }
}


export {
    addProblem,
    getProblem,
    updateProblem,
    deleteProblem,
    getProblems
}