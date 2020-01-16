const clarifaiApp = require('../services/clarifai')
const celebrity_modelID = 'e466caa0619f444ab97497640cefc4dc'

module.exports = (req, res, next) => {
   clarifaiApp.models.predict(celebrity_modelID, req.body.image)
   .then(
      function(response) {
         // console.log(response.outputs[0].data.regions[0].data.face.identity.concepts)
         req.similarities = response.outputs[0].data.regions[0].data.face.identity.concepts.filter(concept => {
            return concept.value > 0.33
         })

         req.similarities = req.similarities.map(celeb => ({
            name: celeb.name,
            value: celeb.value
         }))
         
         console.log('at similarities js', req.similarities)

         next()
      },

      function(err) {
         next(err)
      }
   )
   .catch(err => {
      next(err)
   })
}