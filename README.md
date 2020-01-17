# people-recog
## BASE URL:
http://ec2-18-219-119-178.us-east-2.compute.amazonaws.com:55555
<hr>
# img
<hr>
## upload image
### url
POST /imgUpload

### body
image: [file]
<hr>

### success response
```json
{
    "image": "https://zoezachary.s3.ap-southeast-1.amazonaws.com/1579238106872emmastone.jpg"
}
```
<hr>
## search image
### url
GET /imgSearch

### query
q: String (name of a person)

# person

## add new person
### url
POST /person

### body
image: String (image url string)

### success response
```json
{
    "person": {
        "age": 28.58401325592422,
        "category": "Women",
        "_id": "5e2143072266461a2410ad92",
        "image": "https://zoezachary.s3.ap-southeast-1.amazonaws.com/1579238106872emmastone.jpg",
        "similarities": [
            {
                "_id": "5e2143072266461a2410ad93",
                "name": "emma stone",
                "value": 0.99665725
            }
        ],
        "createdAt": "2020-01-17T05:15:51.015Z",
        "updatedAt": "2020-01-17T05:15:51.015Z",
        "__v": 0
    }
}
```
<hr>

## get people
### url
GET /person

### success response
```json
{
    "people": [
        {
            "age": 28.58401325592422,
            "category": "Women",
            "_id": "5e2143072266461a2410ad92",
            "image": "https://zoezachary.s3.ap-southeast-1.amazonaws.com/1579238106872emmastone.jpg",
            "similarities": [
                {
                    "_id": "5e2143072266461a2410ad93",
                    "name": "emma stone",
                    "value": 0.99665725
                }
            ],
            "createdAt": "2020-01-17T05:15:51.015Z",
            "updatedAt": "2020-01-17T05:15:51.015Z",
            "__v": 0
        },
        {
            "age": 20.060947041623876,
            "category": "Women",
            "_id": "5e2141902266461a2410ad90",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/447px-Emma_Watson_2013.jpg",
            "similarities": [
                {
                    "_id": "5e2141902266461a2410ad91",
                    "name": "emma watson",
                    "value": 0.9930316
                }
            ],
            "createdAt": "2020-01-17T05:09:36.237Z",
            "updatedAt": "2020-01-17T05:09:36.237Z",
            "__v": 0
        }
    ]
}
```
<hr>
## Get one person
### url
GET /person/:id

### success response
```json
{
    "person": {
        "age": 28.76395981333917,
        "category": "Men",
        "_id": "5e215870c5405b1eb32aa327",
        "image": "https://zoezachary.s3.ap-southeast-1.amazonaws.com/1579243596868download%20%282%29.jpeg",
        "similarities": [
            {
                "_id": "5e215870c5405b1eb32aa328",
                "name": "tom cruise",
                "value": 0.9970764
            }
        ],
        "createdAt": "2020-01-17T06:47:12.671Z",
        "updatedAt": "2020-01-17T06:47:12.671Z",
        "__v": 0
    }
}
```
