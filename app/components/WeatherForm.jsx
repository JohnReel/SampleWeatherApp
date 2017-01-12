var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function (e) {
			e.preventDefault();

			var location = this.refs.location.value;
			if (location.length > 0) {
				this.refs.location.value = "";
				this.props.onSearch(location);
			}
        
		},
	render: function () {
		return (
			<div>
				<h3>WeatherForm Component</h3>
				<div>
					<form onSubmit={this.onFormSubmit}>
						<div>
							<input type="text" ref="location" placeholder="Entery City"></input>
						</div>
						<div>
							<button>Get Weather</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = WeatherForm;