//

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
			grid: this.init(props)
		};
	}

	// componentDidMount() {
	// 	this.handleOnNewgame();
	// }

	// init = (props) => {
	// return new Array(props.gridSize).fill(new Array(props.gridSize).fill(true));
	// }

	init = props => {
		const arr = new Array(props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			const columns = new Array(props.gridSize);
			for (let j = 0; j < columns.length; j++) {
				columns[j] = {id: i * arr.length + j, column: j, on: true };
			}
			arr[i] = { row: i, columns };
		}
		return arr;
	}

	copyArray = array => {
		const arr = new Array(this.props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = { row: array[i].row, columns: [ ...array[i].columns]};
		}
		return arr;
	}

	handleOnNewgame = () => {

	}

	handleOnKeyPressed = (row, column) => {
		console.log('Board::handleOnKeyPressed; row ', row, ' column ', column);
		this.setState(prevState => {
			const array = this.copyArray(prevState.grid);
			// console.log('array ', array);
			array[row].columns[column].on = false;
			return (
				{ grid: array }
			)
		});
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
					<Grid grid={this.state.grid} onKeyPressed={this.handleOnKeyPressed} />
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
	gridSize: 5
}

export default Board;

/*
		// const word = randomWord().toUpperCase();
		// this.setState({
		// 	currentWord: convertStringtoArrayObject(word),
		// 	keyboard: convertStringtoArrayObject(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`),
		// 	gameWon: false,
		// 	gameLost: false,
		// 	guessesRemaining: this.props.maxGuesses,
		// 	isReady: true
		// });

		// const arr = [];
		// for (let i = 0; i < props.gridSize ** 2; i++) {
		// 	const obj = {id: i, active: true, row: 0, col: 0};
		// 	arr.push(obj);
		// }


		// const arr = new Array(5);
		// for (let i = 0; i < arr.length; i++) {
		// 	arr[i] = new Array(3);
		// 	for (let j = 0; j < arr[i].length; j++) {
		// 		arr[i][j] = true;
		// 	}
		// }
		// return arr;

	init = props => {
		const arr = new Array(props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(props.gridSize);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = {id: i * arr[i].length + j, on: true };
			}
		}
		return arr;
	}
		copyArray = array => {
		const arr = new Array(this.props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(this.props.gridSize);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = array[i][j];
			}
		}
		return arr;
	}

*/
