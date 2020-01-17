const Person = require('../models/Person')

class PersonController {
   static async create(req, res, next) {
      try {
         const {image} = req.body
         const similarities = req.similarities
         const age = req.age
         const category = req.keyword

         const person = await Person.create({image, similarities, age, category})

         res.status(201).json({person})
      }
      catch (error) {
         next(error)
      }
   }

   static async read(req, res, next) {
      try {
         const people = await Person.find()
            .sort({createdAt: 'desc'})
         
         res.status(200).json({people})
      }
      catch (error) {
         next(error)
      }
   }

   static async readOne(req, res, next) {
      try {
         const person = await Person.findOne({_id: req.params.id})
         res.status(200).json({person})
      }
      catch (error) {
         next(error)
      }
   }
}

module.exports = PersonController