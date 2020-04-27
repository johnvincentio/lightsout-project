//

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../tools/Icon';

class Search extends React.Component {
	state = {
		term: ''
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	handleChange = event => {
		const { value } = event.target;
		this.setState({ term: value });
		this.props.onSubmit(value);
	};

	render() {
		return (
			<section id="search">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<div className="search-field">
						{/* <label htmlFor="search">
							Widget search */}
						<input
							id="search"
							type="text"
							value={this.state.term}
							onChange={e => this.handleChange(e)}
							placeholder="Widget Search"
							className="search-input"
						/>
						<button type="button" className="search-button">
							<Icon name="search" css="search-icon" />
						</button>
						{/* <Icon name="search" css="search-icon" /> */}
						{/* </label> */}
					</div>
				</form>
			</section>
		);
	}
}

Search.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Search;
