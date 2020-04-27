// MuiSlider

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/lab/Slider';

import { isSliderReady, timeToString } from '../utilities/utils';

const styles = {
	root: {
		width: 500,
		marginLeft: '40px'
	},
	slider: {
		padding: '22px 0px'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '100%'
	}
};

class MuiSlider extends React.Component {
	handleChange = (event, value) => {
		this.props.setTime(value);
	};

	render() {
		// console.log('PlayerSlider::render()');
		const { classes } = this.props;
		const { folders, folderId, trackId, duration, currentTime } = this.props;
		// console.log('duration ', duration, ' currentTime ', currentTime);

		if (!isSliderReady(folders, folderId, trackId, duration, currentTime)) {
			return '';
		}

		const durationStr = timeToString(duration);
		const timeStr = timeToString(currentTime);
		// console.log('durationStr ', durationStr);
		// console.log('timeStr ', timeStr);

		return (
			<div className={classes.root}>
				<div className={classes.flexRow}>
					<Typography component="div">
						<Box
							textAlign="left"
							m={1}
							fontWeight="fontWeightRegular"
							fontSize="fontSize"
						>
							{timeStr}
						</Box>
					</Typography>
					<Slider
						className={classes.slider}
						value={currentTime}
						min={0}
						max={duration}
						aria-labelledby="label"
						onChange={this.handleChange}
					/>
					<Typography component="div">
						<Box
							textAlign="right"
							m={1}
							fontWeight="fontWeightRegular"
							fontSize="fontSize"
						>
							{durationStr}
						</Box>
					</Typography>
				</div>
			</div>
		);
	}
}

MuiSlider.propTypes = {
	classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

MuiSlider.propTypes = {
	classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	folders: PropTypes.any, // eslint-disable-line react/forbid-prop-types
	folderId: PropTypes.number,
	trackId: PropTypes.number,
	duration: PropTypes.number,
	currentTime: PropTypes.number,
	setTime: PropTypes.func.isRequired
};

MuiSlider.defaultProps = {
	folders: [],
	folderId: null,
	trackId: null,
	duration: null,
	currentTime: null
};

export default withStyles(styles)(MuiSlider);
