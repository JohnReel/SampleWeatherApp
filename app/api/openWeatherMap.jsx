var axios = require('axios');

const openWeatherMapAPIKey = "261c4f695242b01e85fa1f7308db775e";
const openWeatherMapUnits  = "metric";
const OPEN_WEATHER_MAP_URL    = `http://api.openweathermap.org/data/2.5/weather?appid=${openWeatherMapAPIKey}&units=${openWeatherMapUnits}`;

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
				
		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}
