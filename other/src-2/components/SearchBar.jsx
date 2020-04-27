//

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
	state = {
		term: ''
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
							Image search
							<input id="search"
								type="text"
								value={this.state.term}
								onChange={(e) => this.setState({ term: e.target.value })}
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
