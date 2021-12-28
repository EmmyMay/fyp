import mongoose from 'mongoose'
import * as Validator from '../../src/utils/validation.mjs'

const Schema = mongoose.Schema
const ProjectSchema = new Schema({
    author: {
    type: Schema.Types.ObjectId,
    ref: 'Students'
    },
    title: { type: String, required: true, validate: Validator.NameValidator(200) },
    submmittedOn: { type: String, required: true },
    uploadedBy: { type: Date },
    supervisedBy: {type: String, required: true, validate: Validator.NameValidator(100)},
    tags: { type: [String], required: true }
    // fileUrl: {type: String}
  
})

const Projects = mongoose.model('Projects', ProjectSchema);

export default Projects;
