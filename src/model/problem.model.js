import { Schema, model } from 'mongoose'

const problemSchema = new Schema({
    title: {
        type: String,
        required: [true,'title is required'],
        lowercase: true,
        trim: true,
    },
    description:{
        type: String,
        required: [true,'description is required'],
        lowercase: true,
        trim: true,
    },
    difficulty: {
        type: String,
        required: [true,'difficulty is required'],
        enum: ['easy', 'medium', 'hard'],
        default: 'easy',
        trim: true,
    },
    testCases: [
        {
            input:{
                type: String,
                required: true,
                lowercase: true,
            },
            output:{
                type: String,
                required: true,
                lowercase: true,
            }
        }
    ],
    editorial:{
        type: String,
    }
})

const Problem = model('problem', problemSchema)
export default Problem