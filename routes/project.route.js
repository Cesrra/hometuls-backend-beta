const express = require('express')
const projectRoute = express.Router()
// Project model
let Project = require('../models/Project')
// Add Project
projectRoute.route('/create').post((req, res, next) => {
  Project.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Projects
projectRoute.route('/').get((req, res) => {
  Project.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single Project
projectRoute.route('/read/:id').get((req, res) => {
  Project.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Project
projectRoute.route('/update/:id').put((req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Project updated successfully')
    }
  })
})
// Delete Project
projectRoute.route('/delete/:id').delete((req, res, next) => {
  Project.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = projectRoute