import Mongoose from 'mongoose';
import Project from '../database/model/Project.mjs'
import Student from '../database/model/Student.mjs'




export const saveProjectMetaData = async (req, res) => {
  console.log(req.body);
  const checkForDuplicate = await Project.findOne({
    title: req.body.title
  });
  if (checkForDuplicate) {
    res.status(409).json({
      message: "That Project already exists"
    })
    return;
  }
  console.log(checkForDuplicate);
  if (!req ? .body ? .firstName || !req ? .body ? .title) {
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
      option,
      project_id: new Mongoose.Types.ObjectId()
    })

    const {
      title,
      submittedOn,
      supervisedBy,
      tags
    } = req.body;
    const project = await Project.create({
      _id: student.project_id,
      author: student._id,
      title,
      submittedOn,
      supervisedBy,
      tags
    })
    res.status(201).json({
      message: "Project Successfully Saved"
    })

  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "unable to save project"
    })
  }
}

export const getProject = async (req, res) => {

  // Search By Project title
  try {
    var phrase = "\"" + req.body.title + "\"";
    const project = await Project.find({
      $text: {
        $search: phrase
      }
    })
    console.log(project);

    res.status(200).json({
      message: "Found Project!",
      data: project
    })


  } catch (error) {
    res.status(400).json({
      message: "Project not found!"
    })
  }

}