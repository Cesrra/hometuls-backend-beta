const express = require('express')
const storeRoute = express.Router()
// Store model
let Store = require('../models/Store')
// Add Store
storeRoute.route('/create').post((req, res, next) => {
  Store.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Stores
storeRoute.route('/').get((req, res) => {
  Store.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single Store
storeRoute.route('/read/:id').get((req, res) => {
  Store.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Store
storeRoute.route('/update/:id').put((req, res, next) => {
  Store.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Store updated successfully')
    }
  })
})
// Delete Store
storeRoute.route('/delete/:id').delete((req, res, next) => {
  Store.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = storeRoute