//

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
	state = {
		term: ''
	}

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	}


	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">

						<label htmlFor="search">
							Video search
							<input id="search"
								type="text"
								value={this.state.term}
								onChange={this.onInputChange}
							/>
						</label>

					</div>
				</form>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
