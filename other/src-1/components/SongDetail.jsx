
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { songType } from '../types/index';

import * as actions from '../redux/actions';

const SongDetail = ({ selectedSong }) => {
	if (selectedSong) {
		return (
			<div>
				<h3>Details For:</h3>
				<p>
					Title: {selectedSong.title}
					<br />
					Duration: {selectedSong.duration}
				</p>
			</div>
		);
	}
	return <div>Select a Song</div>
}

SongDetail.defaultProps = {
	selectedSong: null
};

SongDetail.propTypes = {
	selectedSong: songType // eslint-disable-line react/no-typos
};

const mapStateToProps = state => ({
	selectedSong: state.songs.selectedSong
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongDetail);
