//

import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
	state = {
		term: ''
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
		// this.setState({ term: '' });
	};

	handleChange = event => {
		const { value } = event.target;
		this.setState({ term: value });
		// this.props.onSubmit(value);
	};

	render() {
		// console.log('Search::render(); props ', this.props);
		return (
			<section className="search">
				<form onSubmit={this.onFormSubmit}>
					<input
						id="search"
						type="text"
						value={this.state.term}
						onChange={e => this.handleChange(e)}
						placeholder="Search Users..."
						className="header--search input-field"
					/>
				</form>
			</section>
		);
	}
}

Search.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Search;
