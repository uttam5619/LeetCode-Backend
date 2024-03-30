import express from 'express';
import { deleteUser, getUser, updateUser } from '../../controllers/user.controller.js';

const userRoute = express.Router()

userRoute.get('/:id', getUser)
userRoute.put('/update/:id',updateUser)
userRoute.delete('/delete/:id',deleteUser)

export default userRoute