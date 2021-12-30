import * as Validator from '../../src/utils/validation.mjs'
import mongoose from 'mongoose'


const Schema = mongoose.Schema
const StudentSchema = new Schema({
    
    firstName: { type: String, required: true, validate: Validator.NameValidator },
    lastName: { type: String, required: true, validate: Validator.NameValidator },
    middleName: { type: String, required: true, validate: Validator.NameValidator },
    email: { type: String, required: true, validate: Validator.EmailValidator },
    phone: { type: String, required: true, validate: Validator.PhoneValidator },
    option: {
      type: [String], enum: ['Power Engineering', 'Control Engineering', 'Telecommunications Engineering'],
      validate: Validator.EnumValidator
    },
    project_id: {
      type: Schema.Types.ObjectId,
      ref: 'Projects'
    }
 
})

const Students = mongoose.model('Students', StudentSchema)
export default Students;