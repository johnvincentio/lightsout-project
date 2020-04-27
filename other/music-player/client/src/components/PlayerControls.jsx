// PlayerControls

import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';

import { AllStyles, ControlsBox } from './AllStyles';

class PlayerControls extends React.Component {
	previousTrack = () => {
		// console.log('PlayerControls::previousTrack');
		this.props.onClick('previous-track');
	};

	playTrack = () => {
		// console.log('PlayerControls::playTrack');
		this.props.onClick('play-track');
	};

	pauseTrack = () => {
		// console.log('PlayerControls::pauseTrack');
		this.props.onClick('pause-track');
	};

	nextTrack = () => {
		// console.log('PlayerControls::nextTrack');
		this.props.onClick('next-track');
	};

	render() {
		// console.log('PlayerControls::render()');
		const { classes, playing } = this.props;
		return (
			<ControlsBox>
				<IconButton
					onClick={() => this.previousTrack()}
					aria-label="Previous Track"
				>
					<SkipPreviousIcon className={classes.controlIcon} />
				</IconButton>

				{playing ? (
					<IconButton
						onClick={() => this.pauseTrack()}
						aria-label="Pause Track"
					>
						<PauseCircleFilled className={classes.controlIcon} />
					</IconButton>
				) : (
					<IconButton onClick={() => this.playTrack()} aria-label="Play Track">
						<PlayCircleFilledWhite className={classes.controlIcon} />
					</IconButton>
				)}

				<IconButton onClick={() => this.nextTrack()} aria-label="Next Track">
					<SkipNextIcon className={classes.controlIcon} />
				</IconButton>
			</ControlsBox>
		);
	}
}

PlayerControls.propTypes = {
	classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	playing: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default withStyles(AllStyles, {
	name: 'PlayerControls',
	withTheme: true
})(PlayerControls);
