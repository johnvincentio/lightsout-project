
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

	renderInput = props => {
		// console.log('--- renderInput, props ', props);
		const { input, label, meta, htmlFor } = props;
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label htmlFor={htmlFor}>
					{label}
					<input id={htmlFor} {...input} autoComplete="off" />
				</label>
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = formValues => {
		// console.log('StreamForm::onSubmit')
		this.props.onSubmit(formValues);
	};

	renderError = ({ error, touched }) => {
		// console.log('renderError, error ', error, ' touched ', touched)
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
		return null;
	}

	render() {
		// console.log('****** StreamForm; props ', this.props);
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" htmlFor="title" />
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
					htmlFor="description"
				/>
				<button type="submit" className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	// console.log('validate');
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}

	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

StreamForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);
