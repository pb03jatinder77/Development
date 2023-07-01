const request = require('request');
/** get the Weather */
exports.getWeather = async (req, result) => {
    try {
        var options = {
            'method': 'GET',
            'url': `http://api.weatherstack.com/current?access_key=b735237d29e2ca3b1a45ce40199f0d7f&query=${req}`,
            'json': true
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            result(null, `Today's weather in ${response?.body?.location?.name} is ${response?.body?.current?.weather_descriptions[0]}`);
        });
    } catch (err) {
        result(err, null);
    }
};
