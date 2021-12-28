import express from 'express'
import * as Controller from '../../controllers/projectController.mjs'

const router = express.Router();

router.get('/', (req, res) => (
  res.status(200).json({
    message: "Hello from FYP!!!!"
  })
))




router.post('/save', async (req, res) => {
  try {
    let saveProject = await Controller.saveProjectMetaData();
     res.status(201).json({
       message: "Project Successfully Saved"
     })
  } catch (error) {
    res.status(401).json({
      message: "unable to save project"
    })
  } 
  
})


export default router;