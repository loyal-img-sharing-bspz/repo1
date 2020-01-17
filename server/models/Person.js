const mongoose = require('mongoose')
const Schema = mongoose.Schema
const timestamp = require('mongoose-timestamp2')

const personSchema = new Schema({
   image: {
      type: String,
      required: [true, 'Must insert image link']
   },

   similarities: [{
      name: String,
      value: Number
   }],

   age: {
      type: Number,
      default: 0
   },

   category: {
      type: String,
      default: ''
   }
})

personSchema.plugin(timestamp)

const Person = mongoose.model('Person', personSchema)

module.exports = Person