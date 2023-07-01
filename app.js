const request = require('request');
const axios = require('axios');

/** get you ip adress */
const getIPAddress = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;
        try {
            return await axios.get(`http://ip-api.com/json/${ip}`);
        } catch (error) {
            return ('Error getting geolocation data:', error);
        }
    } catch (error) {
        console.error('Error getting IP address:', error);
    }
};
getIPAddress()
    .then((location) => {
        const city = location?.data?.city
        var options = {
            'method': 'GET',
            'url': `http://api.weatherstack.com/current?access_key=b735237d29e2ca3b1a45ce40199f0d7f&query=${city}`,
            'headers': {
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error); 
            console.log(`Today's weather in ${location?.data?.city} is ${JSON.parse(response?.body)?.current?.weather_descriptions[0]}`);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });