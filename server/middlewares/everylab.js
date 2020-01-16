const axios = require('axios')

const baseUrl = 'https://api.everypixel.com/v1'

const auth = {
   username: process.env.EVERYPIXEL_CLIENTID,
   password: process.env.EVERYPIXEL_SECRET
}

async function getAge(req, res, next) {
   try {
      const {data} = await axios({
         url: `${baseUrl}/faces`,
         method: 'get',
         params: {
            url: req.body.image,
            num_keywords: 1
         },
         auth
      })

      req.age = data.faces[0].age
      next()
   }
   catch (error) {
      next(error)
   }
}

async function getKeyword(req, res, next) {
   try {
      const {data} = await axios({
         url: `${baseUrl}/keywords`,
         method: 'get',
         params: {
            url: req.body.image,
            num_keywords: 1
         },
         auth
      })

      req.keyword = data.keywords[0].keyword
      next()
   }
   catch (error) {
      next(error)
   }
}

module.exports = {
   getAge,
   getKeyword
}