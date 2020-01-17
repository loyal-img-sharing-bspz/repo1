const routes = require('express').Router()
const PersonRoutes = require('./personRoutes')
const {singleUpload} = require('../services/awsS3Upload')
const bingImageSearch = require('../services/bingImageSearch')

routes.post('/imgUpload', function(req, res, next) {
   singleUpload(req, res, (err) => {
      if(err) next(err)
      else {
         res.status(201).json({image: req.file.location})
      }
   })
})

routes.get('/imgSearch', bingImageSearch)
routes.use('/person', PersonRoutes)

module.exports = routes