import express from 'express'
import { addProblem, deleteProblem, getProblem, updateProblem, getProblems } from '../../controllers/problem.controller.js'
const problemRoute = express.Router()

problemRoute.get('/:id', getProblem)
problemRoute.post('/add', addProblem)
problemRoute.put('/update/:id', updateProblem)
problemRoute.delete('/delete/:id', deleteProblem, getProblems)
problemRoute.get('/', getProblems)

export default problemRoute