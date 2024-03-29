import express from 'express'
import { addProblem, deleteProblem, getProblem, updateProblem, getProblems } from '../../controllers/problem.controller'
const problemRouter = express.Router()

problemRouter.get('/:id', getProblem)
problemRouter.post('/:id', addProblem)
problemRouter.put('/:id', updateProblem)
problemRouter.delete('/:id', deleteProblem)
problemRouter.get('/', getProblems)

export default problemRouter