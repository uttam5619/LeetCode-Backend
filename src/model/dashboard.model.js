import { Schema, model } from 'mongoose'
import { User } from './user.model'
import Problem from './problem.model'

const Dashboard = new Schema({
    user :{
        type: Schema.Types.ObjectId,
        ref: User
    },
    solvedProblems : [
        {
            type: Schema.Types.Boolean,
            ref: Problem
        }
    ],
    stars: {
        type: String,
        enum: ['zero', 'one', 'two', 'three', 'four', 'five']
    },
    upVotes: {
        type: Number,
        default : 0
    },
    upVotedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: User
        }
    ],
    streak : [
        {
            type: Date,
        }
    ]

})