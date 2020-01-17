'use strict';
const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

//replace this value with your valid subscription key.
let serviceKey = '3587ddb9bfd14c90a4cecca72d8ab56e'

//the search term for the request
let searchTerm = "canadian rockies";

//instantiate the image search client 
let credentials = new CognitiveServicesCredentials(serviceKey);
let imageSearchApiClient = new ImageSearchAPIClient(credentials);

//a helper function to perform an async call to the Bing Image Search API
module.exports = (req, res, next) => {
    const sendQuery = async () => {
        return await imageSearchApiClient.imagesOperations.search(req.query.q);
    }
    
    sendQuery().then(imageResults => {
        if (imageResults == null) {
            next({
                errorCode: 404,
                message: 'Cannot find any image from this keyword.'
            })
        }
        else {
            // console.log(`Total number of images returned: ${imageResults.value.length}`);
            let firstImageResult = imageResults.value[0];
            //display the details for the first image result. After running the application,
            //you can copy the resulting URLs from the console into your browser to view the image.
            // console.log(`Total number of images found: ${imageResults.value.length}`);
            // console.log(`Copy these URLs to view the first image returned:`);
            // console.log(`First image thumbnail url: ${firstImageResult.thumbnailUrl}`);
            // console.log(`First image content url: ${firstImageResult.contentUrl}`);

            // res.status(200).json({image: imageResults.value.image[0].contentUrl})
            res.status(200).json({image: firstImageResult.contentUrl})
        }
      })
      .catch(err => console.error(err))
}