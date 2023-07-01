const { getIPAddress } = require('./src/GetIpAddress');
const { getLoaction } = require('./src/GetLocation');
const { getWeather } = require('./src/GetWeather');

getIPAddress(null,(error, ipAddress) => {
    if (error) {
        console.error('Error getting IP address:', error);
    } else {
        console.log('ipAddress: ', ipAddress);
        getLoaction(ipAddress, (error, location) => {
            if (error) {
                console.error('Error getting geolocation data:', error);
            } else {
                console.log('Location: ', location?.data?.city);
                const city = location?.data?.city
                getWeather(city, (error, Weather) => {
                    if (error) {
                        console.error('Error getting weather data:', error);
                    } else {
                        console.log('Weather: ', Weather);
                    }
                });
            }
        });
    }
});