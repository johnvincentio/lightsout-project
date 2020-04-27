
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { songsType } from '../types/index';

import * as actions from '../redux/actions';

class SongList extends React.Component {

	renderList() {
		const { selectSong } = this.props.actions;
		return this.props.songs.map((song) => (
			<div key={song.title} className="item">
				<div className="right floated content">
					<button type="button" className="ui primary button" onClick={() => selectSong(song)}>
						Select
					</button>
				</div>
				<div className="content">{song.title}</div>
			</div>
		));
	};

	render() {
		return (
			<div className="ui divided list">
				{this.renderList()}
			</div>
		);
	}
}

SongList.propTypes = {
	songs: songsType.isRequired, // eslint-disable-line react/no-typos
	actions: PropTypes.shape({
		selectSong: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	songs: state.songs.songs
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
