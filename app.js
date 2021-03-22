const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// address taken through the command line e.g node app.js australia

const address = process.argv[2]

if(!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })
}
