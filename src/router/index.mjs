import express from 'express'
import * as Controller from '../../controllers/projectController.mjs'

const router = express.Router();

router.get('/', (req, res) => (
  res.status(200).json({
    message: "Hello from FYP!!!!"
  })
))




router.post('/save', Controller.saveProjectMetaData)

router.get('/projectbytitle', Controller.getProject)

export default router;