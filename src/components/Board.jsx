//

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false
		};
	}

	componentDidMount() {
		this.handleOnNewgame();
	}

	handleOnNewgame = () => {
		// const word = randomWord().toUpperCase();
		// this.setState({
		// 	currentWord: convertStringtoArrayObject(word),
		// 	keyboard: convertStringtoArrayObject(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`),
		// 	gameWon: false,
		// 	gameLost: false,
		// 	guessesRemaining: this.props.maxGuesses,
		// 	isReady: true
		// });
	}

	handleOnKeyPressed = (letter) => {
		// console.log('Board::handleOnKeyPressed; letter ', letter);
	}

	renderNewGameButton = () => {
		return (
			<div className="board--restart">
				<button type="button" className="board--restart-button" onClick={() => this.handleOnNewgame()}>
					Restart
				</button>
			</div>
		)
	}

	render() {
		// console.log('Board::render(); this.state ', this.state, ' this.props ', this.props);
		// const { currentWord, keyboard, guessesRemaining, isReady, gameWon, gameLost } = this.state;
		// if (! isReady) {
		// 	return <div>Loading...</div>;
		// }

		return (
			<div className="board">
				<div className="board--header">Lights Out</div>
				<div className="board--container">
					<Grid />
					{this.renderNewGameButton()}
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	maxGuesses: PropTypes.number
}

Board.defaultProps = {
	maxGuesses: 6
}

export default Board;
