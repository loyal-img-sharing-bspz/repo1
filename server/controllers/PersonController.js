const Person = require('../models/Person')

class PersonController {
   static async create(req, res, next) {
      try {
         const {image} = req.body
         const similarities = req.similarities
         const age = req.age

         // console.log(`nyampe sini\n-------------------\n${image}\n${similarities}\n${age}`)

         const person = await Person.create({image, similarities, age})

         res.status(201).json({person})
         // res.status(201).json('hehe')
      }
      catch (error) {
         next(error)
      }
   }

   static async read(req, res, next) {
      try {
         const people = await Person.find()
            .sort('created_at', 'desc')
         
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