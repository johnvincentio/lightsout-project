//

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
			data: this.init()
		};
	}

	// componentDidMount() {
	// 	this.handleOnNewgame();
	// }

	init = () => {
		const arr = new Array(5);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(3);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = true;
			}
		}
		return arr;
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

	handleOnKeyPressed = (id1, id2) => {
		console.log('Board::handleOnKeyPressed; id1 ', id1, ' id2 ', id2);
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
		console.log('Board::render(); this.state ', this.state, ' this.props ', this.props);
		// const { currentWord, keyboard, guessesRemaining, isReady, gameWon, gameLost } = this.state;
		// if (! isReady) {
		// 	return <div>Loading...</div>;
		// }

		return (
			<div className="board">
				<div className="board--header">Lights Out</div>
				<div className="board--container">
					<Grid onKeyPressed={this.handleOnKeyPressed} />
					{this.renderNewGameButton()}
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	gridSize: PropTypes.number
}

Board.defaultProps = {
	gridSize: 6
}

export default Board;
