var React = require('react');

var WeatherResults = ({temp, location}) => {
		return (
			<div>
				<h3 id="weatherResults">It's {temp} in {location}</h3>
			</div>
		)
	}

module.exports = WeatherResults;