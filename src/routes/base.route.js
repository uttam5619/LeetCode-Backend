import express from 'express';
import authRoute from "./v1/auth.route.js";
import problemRoute from "./v1/problem.route.js";
import userRoute from "./v1/user.route.js";

const appRouter = express.Router()

appRouter.use('/v1/auth', authRoute)
appRouter.use('/v1/problem',problemRoute)
appRouter.use('/v1/user', userRoute)

export default appRouter