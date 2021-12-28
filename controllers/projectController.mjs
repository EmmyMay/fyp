import   Mongoose from 'mongoose';
import Project from '../database/model/Project.mjs'
import Student from '../database/model/Student.mjs'




export const saveProjectMetaData = async (req, res) => {
  if (!req?.body?.user.firstName || !req?.body?.project.title) {
    return res.status(400).json({
      'message': 'User and Project Data required'
    });
  }

  try {
    const {
      firstName,
      lastName,
      middleName,
      email,
      phone,
      option
    } = req.body;
    const student = await Student.create({
      _id: new Mongoose.Types.ObjectId(),
      firstName,
      lastName,
      middleName,
      email,
      phone,
      option
    })

    const {
      title,
      submittedOn,
      supervisedBy,
      tags
    } = req.body;
    const project = await Project.create({
      author: student._id,
      title,
      submittedOn,
      supervisedBy,
      tags
    })

  } catch (error) {
    console.error(error);
  }
}