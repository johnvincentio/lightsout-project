//

import React from 'react';
import PropTypes from 'prop-types';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const { clientHeight } = this.imageRef.current;
		const spans = Math.ceil(clientHeight / 10);
		this.setState({ spans });
	}

	render() {
		const { urls, description } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

ImageCard.propTypes = {
	image: PropTypes.shape({
		id: PropTypes.string.isRequired,
		urls: PropTypes.shape({
			regular: PropTypes.string.isRequired
		}),
		description: PropTypes.string.isRequired
	}).isRequired
};

export default ImageCard;
