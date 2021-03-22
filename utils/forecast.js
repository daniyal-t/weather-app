const request = require('request')

// forecast function takes long and lat from geocode function and search for the location using weatherstack API


const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=df500cebe0c25f2637bee95a09c4367f&query=' + latitude + ',' + longitude
        request({ url , json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast