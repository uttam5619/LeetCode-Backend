import { STATUS_CODE } from "../utils/constants.js"



const addProblem=(req,res)=>{

}

const getProblem=(req,res)=>{

}

const updateProblem=(req,res)=>{

}

const deleteProblem=(req,res,next)=>{

}

const getProblems=(req,res)=>{
    res.status(STATUS_CODE.SUCCESS).json({success:true, message:`route working`})
}


export {
    addProblem,
    getProblem,
    updateProblem,
    deleteProblem,
    getProblems
}