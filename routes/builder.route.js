const express = require('express')
const builderRoute = express.Router()
// Builder model
let Builder = require('../models/Builder')
// Add Builder
builderRoute.route('/create').post((req, res, next) => {
  Builder.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Builders
builderRoute.route('/').get((req, res) => {
  Builder.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single Builder
builderRoute.route('/read/:id').get((req, res) => {
  Builder.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Builder
builderRoute.route('/update/:id').put((req, res, next) => {
  Builder.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Builder updated successfully')
    }
  })
})
// Delete Builder
builderRoute.route('/delete/:id').delete((req, res, next) => {
  Builder.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = builderRoute