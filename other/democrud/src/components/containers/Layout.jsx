//

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header/Header';

import Search from '../search/Search';
import Create from './Create';

// import Error from '../tools/Error';

import * as actions from '../../redux/actions';

class Layout extends React.Component {
	// state = { error_text: 'any error' };

	onSearchSubmit = async term => {
		this.props.actions.searchWidgets(term);
	};

	render() {
		// console.log('Layout; props ', this.props);
		const { main } = this.props;
		return (
			<Fragment>
				<div>
					<Header />

					{main && (
						<section className="layout-toolbar">
							<Create />
							<Search onSubmit={this.onSearchSubmit} />
						</section>
					)}

					{/* <Error text={this.state.error_text} /> */}

					<main>{this.props.children}</main>
				</div>
			</Fragment>
		);
	}
}

Layout.propTypes = {
	main: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	actions: PropTypes.shape({
		searchWidgets: PropTypes.func.isRequired
	}).isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	null,
	mapDispatchToProps
)(Layout);
