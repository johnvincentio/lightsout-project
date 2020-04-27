//

import React from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Error from '../tools/Error';
import ErrorField from '../tools/ErrorField';

import { widgetType } from '../../types';

import * as actions from '../../redux/actions';

import * as utilities from '../../utilities/utils';

class FormWidget extends React.Component {
	state = {
		...this.props.widget,
		error_text: null,
		description_error: ''
	};

	onSubmit = e => {
		console.log('>>> FormWidget::onSubmit, this.state ', this.state);
		e.preventDefault();

		if (!this.validate()) {
			return;
		}

		const { id, name, sku, created, price, quantity, description, userId } = this.state;

		const formattedPrice = parseFloat(price).toFixed(2);
		const obj = { id, name, sku, created, price: formattedPrice, quantity, description, userId };

		if (this.state.id <= 0) {
			this.props.actions.createWidget(obj);
		} else {
			this.props.actions.editWidget(id, obj);
		}
		console.log('<<< FormWidget::onSubmit');
		this.props.history.push('/');
	};

	handleChange = name => ({ target: { value } }) => {
		// console.log('FormWidget::handleChange; name ', name, ' value ', value);
		this.setState({
			[name]: value,
			error_text: null,
			description_error: ''
		});
	};

	handleCancel = e => {
		// console.log('FormWidget::handleCancel');
		e.preventDefault();
		this.props.history.push('/');
	};

	isError = field => {
		const value = this.state[`${field}_error`];
		return value.length > 0;
	};

	/*
pattern="^[-\w\s]+"
title="Allowed: [A-Z][a-z] numbers underscores spaces tabs line breaks"
*/
	validate() {
		const { description } = this.state;
		console.log('validate; description ', description);

		const exp = '^([-_ ,/!.;:\na-zA-Z0-9])+$';
		const re = new RegExp(exp);
		const result = re.test(description);
		if (!result) {
			const title = 'Allowed: [A-Z][a-z], numbers, spaces, line breaks, ".,-_;:!/"';
			this.setState(prevState => ({
				...prevState,
				description_error: title
			}));
			return false;
		}
		return true;
	}

	// '^[-_ a-zA-Z0-9]+$'
	// pattern="^[-_ \w]+"

	render() {
		console.log('FormWidget; props ', this.props, ' state ', this.state);
		const errorDescription = this.isError('description');
		return (
			<form onSubmit={this.onSubmit} className="form-form">
				<Error text={this.state.error_text} />
				<div className="form-field">
					<label htmlFor="name">
						Name
						<input
							required
							autoFocus
							minLength="5"
							maxLength="20"
							placeholder="Name"
							id="name"
							type="text"
							value={this.state.name}
							onChange={this.handleChange('name')}
							pattern="^[-_ \w]+"
							title="Allowed: Alphanumeric characters, space, dash and underscore"
							className="form-input"
						/>
					</label>
				</div>
				<div className="form-field">
					<label htmlFor="sku">
						SKU
						<input
							required
							placeholder="SKU"
							id="sku"
							type="text"
							value={this.state.sku}
							onChange={this.handleChange('sku')}
							pattern="^([A-Z]{3,}[0-9]{5})$"
							title="3 Uppercase characters and 5 numbers"
							className="form-input"
						/>
					</label>
				</div>
				<div className="form-field">
					<label htmlFor="created">
						Date of Manufacture
						<input
							required
							id="created"
							type="date"
							value={this.state.created}
							onChange={this.handleChange('created')}
							className="form-input"
						/>
					</label>
				</div>
				<div className="form-field">
					<label htmlFor="quantity">
						Quantity
						<input
							required
							id="quantity"
							type="number"
							min="1"
							value={this.state.quantity}
							onChange={this.handleChange('quantity')}
							className="form-input"
						/>
					</label>
				</div>
				<div className="form-field">
					<label htmlFor="price">
						Price
						<input
							required
							id="price"
							type="number"
							min="0"
							step="0.01"
							value={this.state.price}
							onChange={this.handleChange('price')}
							pattern="\d+(\.\d{2})?"
							title="Example: 103.95"
							className="form-input"
						/>
					</label>
				</div>

				<div className="form-field">
					<label htmlFor="description">
						<ErrorField error={errorDescription} text="Description" />
						<Error text={this.state.description_error} />
						<textarea
							required
							id="description"
							type="text"
							rows="5"
							cols="60"
							value={this.state.description}
							onChange={this.handleChange('description')}
							placeholder="Description"
							className="form-textarea"
						/>
					</label>
				</div>

				<div className="form-buttons">
					<button type="submit" className="form-button-submit">
						{this.state.id > 0 ? 'Update' : 'Create'}
					</button>
					<button type="submit" className="form-button-cancel" onClick={e => this.handleCancel(e)}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

FormWidget.propTypes = {
	widget: widgetType,
	actions: PropTypes.shape({
		createWidget: PropTypes.func.isRequired,
		editWidget: PropTypes.func.isRequired
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

FormWidget.defaultProps = {
	widget: {
		id: 0,
		name: '',
		sku: '',
		description: '',
		created: utilities.defaultDate(),
		price: '0.01',
		quantity: 1,
		userId: '0'
	}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(FormWidget)
);
