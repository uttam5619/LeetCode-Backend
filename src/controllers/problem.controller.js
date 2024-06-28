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

const getProblem= async (req,res)=>{
    try{
        const { id } = req.body
        if(!id){
            return res.status(400).json({
                success: false,
                message: 'provide a valid id'
            })
        }
        const problem = await problemService.getTheProblem(id)
        if(!problem){
            return res.status(400).json({
                success: false,
                message: 'failed to fetch the problem'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'problem fetched successfully',
            data: problem
        })
    }catch(error){
        console.log(error.message)
        throw error
    }
}

const updateProblem= async (req,res)=>{
    try{
        const { id } = req.body
        if(!id){
            return res.status(400).json({
                success: false,
                message: 'provide a valid problem id'
            })
        }
        const problem = await problemService.updateTheProblem(id)
        if(!problem){
            return res.status(400).json({
                success: false,
                message: 'failed to update the problem'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'problem updated successfully',
            data: problem
        })
    }catch(error){
        console.log(error.message)
    }
}   

const deleteProblem = async (req,res,next)=>{
    try{
        const { id } = req.body
        if(!id){
            return res.status(400).json({
                success: false,
                message: 'provide a valid id'
            })
        }
        await problemService.deleteTheProblem(id)
        res.status(200).json({
            success:true,
            message: 'problem deleted successfully'
        })
    }catch(error){
        console.log(error.message)
        throw error
    }
}

const getProblems=async(req,res)=>{
    try{
        const allProblems = await problemService.getAllProblems()
        if(!allProblems){
            return res.status(400).json({
                success: false,
                message: 'failed to fetch problems'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'all the problems fetched successfully',
            data: allProblems
        })
    }catch(error){
        console.log(error.message)
        throw error
    }
}


export {
    addProblem,
    getProblem,
    updateProblem,
    deleteProblem,
    getProblems
}